import styles from '../../../styles/activeworkout.module.css';
import ExerciseSet from './ExerciseSet.js';
import { uuidv4 } from '@firebase/util';


function ExerciseSection({ exercise, exerciseIndex }) {


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
        </li>
    )


}

export default ExerciseSection;