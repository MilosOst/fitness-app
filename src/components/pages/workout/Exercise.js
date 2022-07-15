import { useState } from 'react';
import styles from '../../../styles/exercises.module.css';

function Exercise({ exercise, addExercise, removeExercise, mode, setReplacementExercise, index, toggledIndex, setToggledIndex }) {
    const [toggled, setToggled] = useState(false);

    const handleClick = () => {
        if (mode === 'Add') {
            toggled ? removeExercise(exercise) : addExercise(exercise);
            setToggled(!toggled);
        }
        else {
            setReplacementExercise(exercise);
            setToggledIndex(index);
        }
    };

    return (
        <li
            className={`${styles.exercise} ${(toggled || index === toggledIndex) ? styles.toggled : ''}`}
            onClick={handleClick}>
            <div className={styles.imgBox}>
                <img src={exercise.img} alt={exercise.name} />
            </div>
            <div className={styles.exerciseInfo}>
                <h3 className={styles.name}>{exercise.name}</h3>
                <h4 className={styles.bodyPart}>{exercise.bodyPart}</h4>
            </div>
        </li>
    );
}

export default Exercise;