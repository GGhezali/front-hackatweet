import styles from "../styles/LastTweets.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

function LastTweets({firstname, username, time, content, isLiked, isTrash}) {
  
  firstname: String,
    username: String,
    time: String,
    content: String,
    isLiked: Boolean,

  return (
    <div className={styles.lastTweets}>
      <div className={styles.info}>
        <div>
          <img src="avatar.jpg" className={styles.avatar} />
        </div>
        <div className={styles.contact}>
          <span>{firstname}</span>
          <span>@{username}</span>
          <span>{time} hours</span>
        </div>
      </div>
      <div className={styles.content}>
        {content}
      </div>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faHeart} />
        <hspan>count</hspan>
        {isTrash && <FontAwesomeIcon icon={faTrash} />}
      </div>
    </div>
  );
}

export default LastTweets;
