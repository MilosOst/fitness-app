import styles from '../../../styles/exercises.module.css';
import closeIcon from '../../../images/svgs/remove.svg';
import { Link } from 'react-router-dom';
import { exerciseList } from '../../../data/exerciseList.js';
import Exercise from './Exercise.js';
import { useContext, useState } from 'react';
import { WorkoutContext } from '../../../context/WorkoutContext.js';

function Exercises({ setSelecting }) {
    const [exercises, setExercises] = useState([]);
    const { addExercises } = useContext(WorkoutContext);

    const addExercise = (exercise) => {
        setExercises([...exercises, exercise]);
    };

    const removeExercise = (selectedExercise) => {
        const filtered = exercises.filter((exercise) => exercise.name !== selectedExercise.name);
        setExercises(filtered);
    };

    const handleSubmit = () => {
        addExercises(exercises);
        setSelecting(false);
    };



    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <header className={styles.header}>
                    <button className={styles.closeBtn} onClick={() => setSelecting(false)}>
                        <img src={closeIcon} alt="Close" />
                    </button>
                    <Link to='addExercise'>New</Link>
                    <button
                        className={styles.addBtn}
                        onClick={handleSubmit}>
                        Add
                    </button>
                </header>
                <ul className={styles.exerciseList}>
                    {exerciseList.map((exercise) => {
                        return (
                            <Exercise exercise={exercise} key={exercise.name} addExercise={addExercise} removeExercise={removeExercise}/>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Exercises;