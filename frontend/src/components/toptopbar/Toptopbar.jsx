
import styles from "./Toptopbar.module.css"
import { Search } from "@mui/icons-material"
import { Link } from "react-router-dom";

export default function Toptopbar() {
  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbarLeft}>
        <span className={styles.logo}>佐賀でサガそう</span>
      </div>
      <div className={styles.topbarCenter}>
        <div className={styles.searchbar}>
          {/* <Search className={styles.searchIcon}/>
          <input
            type="text" 
            className={styles.searchInput}
            placeholder='キーワードを入力してください' /> */}
        </div>
      </div>
      <div className={styles.topbarRight}>
        <div className={styles.topbarItemIcons}>
          <div className={styles.topbarIconItem}>
            <Link to="/login" style={{ textDecoration: "none", color: "white"}}>
              <span className={styles.loginButton}>
                ログイン
              </span>
            </Link>
            
          </div>
          <div className={styles.topbarIconItem}>
            <Link to="/register" style={{ textDecoration: "none", color: "white"}}>
              <span className={styles.registerButton}>新規登録
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
