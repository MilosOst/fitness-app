import { useState } from 'react';
import styles from '../styles/workout.module.css';
import MoreButton from './MoreButton.js';
import WorkoutTemplate from './WorkoutTemplate.js';


function Workout() {
    const [userTemplates, setUserTemplates] = useState([]);
    const [exampleTemplates, setExampleTemplates] = useState([]);


    return (
        <div className={styles.container}>
            <h1 className='section-header'>Start Workout</h1>
            <div className={styles.quickStart}>
                <h4>Quick Start</h4>
                <button className={styles.startBtn}>Start New Workout</button>
                <div className={styles.templatesSection}>
                    <header className={styles.templatesHeader }>
                        <h3 className='bold'>Templates</h3>
                    </header>
                    <div className={styles.templates}>
                        <header className={styles.templatesHeader}>
                            <h4 className='bold'>My Templates ({userTemplates.length})</h4>
                            <MoreButton />
                        </header>
                        <div className={styles.templateGrid}>
                            {userTemplates.length === 0 &&
                                <figure className={`${styles.template} ${styles.emptyTemplate}`}>
                                    <p>Click to Add New Template</p>
                                </figure>}
                        </div>
                    </div>
                    <div className={styles.templates}>
                        <header className={styles.templatesHeader}>
                            <h4 className='bold'>Example Templates ({exampleTemplates.length})</h4>
                            <MoreButton />
                        </header>
                        <div className={styles.templateGrid}>
                            <WorkoutTemplate name='Legs' exercises={['Bench', 'Squat', 'Deadlift', 'Seated Curls']}/>
                            <WorkoutTemplate name='Back and Biceps' exercises={['Pull Ups', 'Push Ups']}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Workout;