
import styles from "./Toptopbar.module.css"
import { Search } from "@mui/icons-material"

export default function Toptopbar() {
  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbarLeft}>
        <span className={styles.logo}>タイトル</span>
      </div>
      <div className={styles.topbarCenter}>
        <div className={styles.searchbar}>
          <Search className={styles.searchIcon}/>
          <input
            type="text" 
            className={styles.searchInput}
            placeholder='キーワードを入力してください' />
        </div>
      </div>
      <div className={styles.topbarRight}>
        <div className={styles.topbarItemIcons}>
          <div className={styles.topbarIconItem}>
            <span className={styles.loginButton}>
              ログイン
            </span>
            
          </div>
          <div className={styles.topbarIconItem}>
            <span className={styles.registerButton}>新規登録
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
