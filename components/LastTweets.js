import styles from "../styles/LastTweets.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

function LastTweets({firstname, username, time, content, usersLike, isTrash, isLike}) {

  const handleHeartClick = () => {
    if (isLike) {
      fetch("http://localhost:3000/tweets//deleteUserLike", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, content }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } else {
      fetch("http://localhost:3000/tweets//addUserLike", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, content }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  }

   let style = {}
   if (isLike){
     style = {"color" : "#ff0000"} 
   } 

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
        <FontAwesomeIcon style={style} icon={faHeart} onClick={() => handleHeartClick()}/>
        {/* <hspan>{usersLike.length}</hspan> */}
        {isTrash && <FontAwesomeIcon icon={faTrash} />}
      </div>
    </div>
  );
}

export default LastTweets;
