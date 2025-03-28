import styles from '../styles/Trends.module.css';
import { useSelector, useDispatch } from 'react-redux';

function Trends({ hashtag, count}) {

  let tweet = "Tweet"
if (count > 1) {
  tweet = "Tweets"
}

  return (
    <div className={styles.trends}>
        <div>
            <h4>{hashtag}</h4>
        </div>
        <div>
            <span className={styles.grey}><span>{count}</span> {tweet}</span>
        </div>

    </div>
  );
}

export default Trends;
