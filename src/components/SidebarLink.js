import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/sidebar.module.css';

function SidebarLink({ name, icon, path}) {
    let location = useLocation();

    return (
        <li>
            <Link
                to={path}
                className={styles.link + (location.pathname.includes(path) ? ` ${styles.active}` : '')}
                >
                <img src={icon} alt={name} className={styles.linkImg}/>
                <h3 className={styles.linkName}>{name}</h3>
            </Link>
        </li>
    );
}

export default SidebarLink;