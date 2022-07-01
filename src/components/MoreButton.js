import dotsHorizontal from '../images/svgs/dots-horizontal.svg';
import styles from '../styles/morebtn.module.css';

function MoreButton() {
    return (
        <button className={styles.btn}>
            <img src={dotsHorizontal} alt="More" className={styles.dots}/>
        </button>
    );
}


export default MoreButton;