import styles from "../styles/LastTweets.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

function LastTweets() {
  return (
    <div className={styles.lastTweets}>
      <div className={styles.info}>
        <div>
          <img src="avatar.jpg" className={styles.avatar} />
        </div>
        <div className={styles.contact}>
          <span>FIRSTNAME</span>
          <span>@USERNAME</span>
          <span>5 hours</span>
        </div>
      </div>
      <div className={styles.content}>
        INSERT TEXT CONTENT DU TWEET EN QUESTION
      </div>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faHeart} />
        <hspan>count</hspan>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}

export default LastTweets;
