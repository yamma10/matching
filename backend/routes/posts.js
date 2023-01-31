const router = require("express").Router();
const Post = require("../models/Post");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
// 投稿に関するAPI
//投稿を作成する
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res. status(200).json(savedPost);
  } catch(err) {
    return res.status(500).json(err);
  }
})

//投稿を削除する
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      return res.status(200).json("投稿削除に成功しました");
    } else {
      return res.status(403).json("あなたは他の人の投稿を削除できません");
    }
  } catch (err) {
    return res.status(403).json(err);
  }
});

//投稿を取得する
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(403).json(err);
  }
})

// 特定の投稿にいいねを押す
router.put("/:id/like", async(req, res) => {
  try {
    //req.params.idは:idの部分と同じ
    const post = await Post.findById(req.params.id);
    //まだ投稿にいいねを押していなかったらいいねを押せる
    if(!post.likes.includes(req.body.userId)) {
      //相手のlikesに自分のIdを追加する
      await post.updateOne({
        $push: {
          likes: req.body.userId,
        }
      })
      return res.status(200).json("投稿にいいねを押しました")
    } else {
      //投稿にすでにいいねが押されている場合、いいねしているユーザーIDを取り除く（いいねを外す）
      await post.updateOne({
        $pull: {
          likes: req.body.userId,
        }
      })
      return res.status(200).json("投稿からいいねを外しました")
    }
  } catch {
    return res.status(500).json(err)
  }
});

// タイムラインの投稿を取得
// タイムラインに表示されるのは同じ市か、methodが同じ人の投稿（授業形態がオンラインかどうか)
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentStudent = await Student.findById(req.params.userId);
    
    if( !currentStudent) {
      const currentTeacher = await Teacher.findById(req.params.userId);

      //同じ市に住んでいるか、オンラインで教えられる教師を取り出す
      const samecityTeachers = await Teacher.find({$or: [
        { city: currentTeacher.city },
        { method: true }
      ]});
      

      //取り出した教師の投稿をすべて取り出す
      //何も投稿していない教師のPostが[]として取り出されてしまう
      const samecityPosts = await Promise.all(samecityTeachers.map((teacher) => {
        const teacherPosts = Post.find({userId: teacher._id});
        return teacherPosts;
      })
      );
      //配列をフラット化することによって内側の配列だけ取り出している
      const flattenedData = samecityPosts.flat();
      return res.status(200).json(flattenedData);
    }

    
    //同じ市に住んでいるか、オンラインで教えられる教師を取り出す
    const samecityTeachers = await Teacher.find({$or: [
      { city: currentStudent.city },
      { method: true }
    ]});

    //取り出した教師の投稿をすべて取り出す
    let samecityPosts = await Promise.all(samecityTeachers.map((teacher) => {
      const teacherPosts = Post.find({userId: teacher._id});
      return teacherPosts;
    })
    );

    //配列をフラット化することによって内側の配列だけ取り出している
    const flattenedData = samecityPosts.flat();
    
    return res.status(200).json(flattenedData);
    
  } catch(err) {
    return res.status(500).json(err);
  }
})

//プロフィール専用のタイムラインの取得
router.get("/profile/:username", async (req, res) => {
  try {
    const currentUser = await Teacher.findOne({username: req.params.username});
    const posts = await Post.find({ userId: currentUser._id});
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;