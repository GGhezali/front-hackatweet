import styles from "../styles/LastTweets.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { inverse } from "../reducers/trigger";
import trigger from "../reducers/trigger";

function LastTweets({
  firstname,
  username,
  time,
  content,
  usersLike,
  isTrash,
  isLike,
}) {
  const dispatch = useDispatch();
  const trigger = useSelector((state) => state.trigger.value)

  const handleHeartClick = () => {
    if (isLike) {
      //console.log("isLike true");
      fetch("http://localhost:3000/tweet/deleteUserLike", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, content }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
        dispatch(inverse(trigger));
    } else {
      //console.log("isLike false");
      fetch("http://localhost:3000/tweet/addUserLike", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, content }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
        dispatch(inverse(trigger));
    }
  };

  const handleTrashClick = () => {
    fetch("http://localhost:3000/tweet/deleteTweet", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ content }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
      dispatch(inverse(trigger));
  }

  let style = {};
  if (isLike) {
    style = { color: "#ff0000" };
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
          <span>{time}</span>
        </div>
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.icons}>
        <FontAwesomeIcon
          style={style}
          icon={faHeart}
          onClick={() => handleHeartClick()}
        />
        <span>{usersLike.length}</span>
        {isTrash && <FontAwesomeIcon icon={faTrash} onClick={() => handleTrashClick()}/>}
      </div>
    </div>
  );
}

export default LastTweets;
