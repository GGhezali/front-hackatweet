import styles from "../styles/Home.module.css";
import LastTweets from "./LastTweets";
import Tweet from "./Tweet";
import Trends from "./Trends";

import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import trigger from "../reducers/trigger"


function Home() {

  const [tweetList, setTweetList] = useState([]);

  const user = useSelector((state) => state.user.value);
  const trigger = useSelector((state) => state.trigger.value)
  
  useEffect(() => {
    fetch("http://localhost:3000/tweet")
      .then((response) => response.json())
      .then((data) => {
        console.log("data =>", data);
        if (data.data) {
          setTweetList(data.data)
        }
      });
  }, [trigger]);

    const lastTweets = tweetList.map((data, i) => {
          let isTrash = false;
          if (data.username === user.username) {
            isTrash = true;
          }
          let isLike = false;
          if(data.usersLike.some((e) => e === user.username)){
            isLike = true;
          }
          return <LastTweets key={i} {...data} isTrash={isTrash} isLike={isLike}/>
        });

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
        {lastTweets}
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
