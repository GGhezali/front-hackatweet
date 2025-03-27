import styles from '../styles/Tweet.module.css';

function Tweet() {
  return (
    <div className={styles.tweet}>
        <div className={styles.title}>
            <h1>HOME</h1>
        </div>
        <div className={styles.content} >
            <input className={styles.input} type="text" placeholder="What's up?"></input>
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
