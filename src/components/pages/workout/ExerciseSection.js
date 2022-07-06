import styles from '../../../styles/activeworkout.module.css';
import ExerciseSet from './ExerciseSet.js';
import { uuidv4 } from '@firebase/util';
import { useContext } from 'react';
import { WorkoutContext } from '../../../context/WorkoutContext.js';


function ExerciseSection({ exercise, exerciseIndex }) {
    const { addSet } = useContext(WorkoutContext);


    return (
        <li className={styles.exerciseSection}>
            <header className={styles.exerciseHeader}>
                <h3 className={styles.exerciseName}>{exercise.name}</h3>
            </header>
            <table className={styles.setsTable}>
                <colgroup>
                    <col className={styles.setCol}/>
                    <col className={styles.weightCol}/>
                    <col className={styles.repsCol}/>
                    <col className={styles.confirmCol}/>
                    <col className={styles.removeCol}/>
                </colgroup>
                <thead>
                    <tr>
                        <th>Set</th>
                        <th>lbs</th>
                        <th>Reps</th>
                    </tr>
                </thead>
                <tbody>
                    {exercise.breakdown.map((entry, index) => {
                        return (
                            <ExerciseSet key={index} entry={entry} setIndex={index} exerciseIndex={exerciseIndex} id={uuidv4()}/>
                        );
                    })}
                </tbody>
            </table>
            <button className={styles.addBtn} onClick={() => addSet(exerciseIndex)}>Add Set</button>
        </li>
    )


}

export default ExerciseSection;