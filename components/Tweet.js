import styles from "../styles/Tweet.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { inverse } from "../reducers/trigger";
import trigger from "../reducers/trigger";

function Tweet() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.value);
  const trigger = useSelector((state) => state.trigger.value)
  const [contenu, setContenu] = useState("");

  const postOnClick = () => {
    fetch("http://localhost:3000/tweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({firstname: users.firstname, username: users.username, content: contenu}),
    })
      .then((response) => response.json())
      .then((data) => {
          setContenu("");
          dispatch(inverse(trigger));
      });
  };

  return (
    <div className={styles.tweet}>
      <div className={styles.title}>
        <h1>HOME</h1>
      </div>
      <div className={styles.content}>
        <input
          className={styles.input}
          type="text"
          placeholder="What's up?"
          onChange={(e) => setContenu(e.target.value)}
          value={contenu}
        ></input>
      </div>
      <div className={styles.submit}>
        <div>0/280</div>
        <div>
          <button className={styles.button} onClick={() => postOnClick()}>
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
