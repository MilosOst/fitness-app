import styles from '../../../styles/activeworkout.module.css';
import expandIcon from '../../../images/svgs/expand-up.svg';
import { useContext, useState } from 'react';
import { WorkoutContext } from '../../../context/WorkoutContext.js';
import ExerciseSection from './ExerciseSection.js';

function ActiveWorkout({ name, exercises }) {
    const [expanded, setExpanded] = useState(false);

    const { activeWorkout, updateActiveWorkout } = useContext(WorkoutContext);
    

    return (
        <div className={`${styles.container} ${expanded ? styles.expanded : ''}`}>
            <button
                className={expanded ? `${styles.expandBtn} ${styles.close}` : styles.expandBtn}
                onClick={() => setExpanded(!expanded)}>
                <img src={expandIcon} alt="" />
            </button>
            <h3 className='bold'>{name}</h3>

            {expanded && 
            <ul className={styles.exerciseList}>
                {activeWorkout.exercises.map((exercise, index) => {
                    return (
                        <ExerciseSection exercise={exercise} key={index} exerciseIndex={index}/>
                    );
                })}
            </ul>
            
            }
        </div>
    );

}


export default ActiveWorkout;