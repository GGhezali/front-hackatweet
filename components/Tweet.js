import styles from "../styles/Tweet.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function Tweet() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.value);
  const [contenu, setContenu] = useState([]);
  console.log(users)

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
          <button className={styles.button}>Tweet</button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
