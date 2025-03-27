import styles from '../styles/Trends.module.css';
import { useSelector, useDispatch } from 'react-redux';

function Trends() {


  return (
    <div className={styles.trends}>
        <div>
            <h4>#QUELQUECHOSE</h4>
        </div>
        <div>
            <span><span>Count</span> Tweets</span>
        </div>

    </div>
  );
}

export default Trends;
