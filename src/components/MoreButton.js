import { useState } from 'react';
import dotsHorizontal from '../images/svgs/dots-horizontal.svg';
import styles from '../styles/morebtn.module.css';


import { uuidv4 } from '@firebase/util';

function MoreButton({ items }) {
    const [open, setOpen] = useState(false);
    

    return (
        <div className={styles.dropdown}>
            <button className={styles.btn} onClick={() => setOpen(true)}>
                <img src={dotsHorizontal} alt="More" className={styles.dots} />
            </button>

            {open &&
                <ul className={styles.dropdownMenu}>
                    {Object.keys(items).map((key) => {
                        return (
                            <li key={uuidv4()} className={styles.menuItem} onClick={items[key].func}>
                                <img src={items[key].img} alt={key} />
                                <p>{key}</p>
                            </li>)
                    })}
                    <button className={styles.closeBtn} onClick={() => setOpen(false)}>Close</button>
                </ul>}
        </div>
    );
}


export default MoreButton;