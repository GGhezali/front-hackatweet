import styles from "../styles/Hashtag.module.css";
import { useSelector, useDispatch } from "react-redux";

function Hashtag() {
  return (
    <div className={styles.hashtag}>
      <div className={styles.title}>
        <h1>Hashtag</h1>
      </div>
      <div className={styles.content}>
        <input className={styles.input} type="text" placeholder="What's new?"></input>
      </div>
    </div>
  );
}

export default Hashtag;
