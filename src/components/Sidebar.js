import styles from '../styles/sidebar.module.css';
import houseIcon from '../images/svgs/house.svg';
import historyIcon from '../images/svgs/history.svg';
import analyticsIcon from '../images/svgs/analytics.svg';
import newIcon from '../images/svgs/new.svg';
import communityIcon from '../images/svgs/people.svg';
import settingsIcon from '../images/svgs/settings.svg';
import logOutIcon from '../images/svgs/logout.svg';

import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import SidebarLink from './SidebarLink.js';

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.avatarBox}>
                <Link to='profile'>
                    <Avatar name='John Doe' round={true} size='75' alt='Error'/>
                </Link>
            </div>
            <ul className={styles.links}>
                <SidebarLink name='Home' icon={houseIcon} path='home'/>
                <SidebarLink name='History' icon={historyIcon} path='history' />
                <SidebarLink name='Analytics' icon={analyticsIcon} path='analytics' />
                <SidebarLink name='New Workout' icon={newIcon} path='workout' />
                <SidebarLink name='Community' icon={communityIcon} path='community' />
            </ul>
            <ul className={styles.links}>
                <SidebarLink name='Settings' icon={settingsIcon} path='settings' />
                <SidebarLink name='Logout' icon={logOutIcon} path='logout' />
            </ul>
        </aside>
    );
}

export default Sidebar;