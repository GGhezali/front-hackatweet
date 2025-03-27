import styles from "../styles/Home.module.css";
import LastTweets from "./LastTweets";
import Tweet from "./Tweet";
import Trends from "./Trends";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.leftcontent}>
        <div>
          <img src="TwitterLogo_white.png" className={styles.logo} />
        </div>
        <div className={styles.identifiant}>
          <div className={styles.ligne}>
            <div>
              <img src="avatar.jpg" className={styles.avatar} />
            </div>
            <div className={styles.info}>
              <h3>FIRSTNAME</h3>
              <h4>@USERNAME</h4>
            </div>
          </div>
          <div>
            <button className={styles.logout}>LOGOUT</button>
          </div>
        </div>
      </div>
      <div className={styles.tweet}>
        <Tweet />
      </div>
      <div className={styles.lastTweets}>
        <LastTweets />
      </div>
      <div className={styles.rightcontent}>
        <div>
          <h1>Trends</h1>
        </div>
        <div className={styles.trends}>
          <Trends />
        </div>
      </div>
    </div>
  );
}

export default Home;
