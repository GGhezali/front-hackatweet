import styles from "../styles/Trends.module.css";
import { useSelector, useDispatch } from "react-redux";

function Hashtag() {
  return (
    <div className={styles.hashtag}>
      <div className={styles.title}>
        <h1>Hashtag</h1>
      </div>
      <div>
        <input type="text" placeholder="What's up?"></input>
      </div>
    </div>
  );
}

export default Hashtag;
