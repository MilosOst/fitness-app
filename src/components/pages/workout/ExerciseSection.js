import styles from '../../../styles/activeworkout.module.css';
import ExerciseSet from './ExerciseSet.js';
import { uuidv4 } from '@firebase/util';
import { useContext } from 'react';
import { WorkoutContext } from '../../../context/WorkoutContext.js';
import MoreButton from '../../MoreButton.js';
import switchIcon from '../../../images/svgs/switch.svg';
import removeIcon from '../../../images/svgs/remove.svg';


function ExerciseSection({ exercise, exerciseIndex }) {
    const { addSet, removeExercise } = useContext(WorkoutContext);

    const log = () => console.log('hello');


    return (
        <li className={styles.exerciseSection}>
            <header className={styles.exerciseHeader}>
                <h3 className={styles.exerciseName}>{exercise.name}</h3>
                <MoreButton items={{
                    'Remove Exercise': {func: () => removeExercise(exerciseIndex), img: removeIcon},
                    'Replace Exercise': {func: log, img: switchIcon} }} />
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