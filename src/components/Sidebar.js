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
import { UserAuth } from '../context/AuthContext.js';
 
function Sidebar() {
    const { logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <aside className={styles.sidebar}>
            <div className={styles.avatarBox}>
                <Link to='profile'>
                    <Avatar round={true} size='75' alt='Error' src={localStorage.getItem('profilePic')} />
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
                <Link
                    to={'/signin'}
                    className={styles.link}
                    onClick={handleSignOut}
                    >
                    <img src={logOutIcon} alt={'Logout'} className={styles.linkImg}/>
                    <h3 className={styles.linkName}>Logout</h3>
            </Link>
            </ul>
        </aside>
    );
}

export default Sidebar;