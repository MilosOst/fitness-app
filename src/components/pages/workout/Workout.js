import { useContext, useEffect, useState } from 'react';
import styles from '../../../styles/workout.module.css';
import MoreButton from '../../MoreButton.js';
import ActiveWorkout from './ActiveWorkout.js';
import WorkoutTemplate from './WorkoutTemplate.js';

import { db } from '../../../firebase-config.js';
import { collection, getDocs } from 'firebase/firestore';

import { WorkoutContext } from '../../../context/WorkoutContext.js';
import { exampleTemplates } from '../../../data/exampleTemplates.js';

import addIcon from '../../../images/svgs/newBlue.svg';


function Workout() {
    const [userTemplates, setUserTemplates] = useState([]);
    const exampleTemplatesRef = collection(db, 'Base Templates');

    const { activeWorkout } = useContext(WorkoutContext);

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
                            <MoreButton items={{'Add Template': {img: addIcon, func: ''}}} />
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
                            {exampleTemplates.map((template) => {
                                return (
                                    <WorkoutTemplate
                                        key={template.id}
                                        name={template.name}
                                        exercises={template.exercises}
                                        />
                                    )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {Object.keys(activeWorkout).length !== 0 && <ActiveWorkout name={activeWorkout.name} />}
        </div>
    );
}

export default Workout;