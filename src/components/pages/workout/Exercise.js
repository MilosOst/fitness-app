import { useState } from 'react';
import styles from '../../../styles/exercises.module.css';

function Exercise({ exercise, addExercise, removeExercise }) {
    const [toggled, setToggled] = useState(false);

    const handleClick = () => {
        toggled ? removeExercise(exercise) : addExercise(exercise);
        setToggled(!toggled);
    };

    return (
        <li
            className={`${styles.exercise} ${toggled ? styles.toggled : ''}`}
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