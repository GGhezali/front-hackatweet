import styles from '../styles/Trends.module.css';
import { useSelector, useDispatch } from 'react-redux';

function Trends({ hashtag, count}) {


  return (
    <div className={styles.trends}>
        <div>
            <h4>{hashtag}</h4>
        </div>
        <div>
            <span className={styles.grey}><span>{count}</span> Tweets</span>
        </div>

    </div>
  );
}

export default Trends;
