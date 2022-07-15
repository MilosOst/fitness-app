import styles from '../../../styles/exercises.module.css';
import closeIcon from '../../../images/svgs/remove.svg';
import { Link } from 'react-router-dom';
import { exerciseList } from '../../../data/exerciseList.js';
import Exercise from './Exercise.js';
import { useContext, useState } from 'react';
import { WorkoutContext } from '../../../context/WorkoutContext.js';

function Exercises({ setSelecting, mode, replaceIndex }) {
    const [exercises, setExercises] = useState([]);
    const [toggledIndex, setToggledIndex] = useState();
    const [replacementExercise, setReplacementExercise] = useState();
    const { addExercises, replaceExercise } = useContext(WorkoutContext);

    const addExercise = (exercise) => {
        setExercises([...exercises, exercise]);
    };

    const removeExercise = (selectedExercise) => {
        const filtered = exercises.filter((exercise) => exercise.name !== selectedExercise.name);
        setExercises(filtered);
    };

    const handleSubmit = () => {
        if (mode === 'Add') {
            addExercises(exercises);
        }
        else {
            if (replacementExercise) {
                replaceExercise(replacementExercise, replaceIndex);
            }
        }
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
                        {mode === 'Add' ? 'Add': 'Replace'}
                    </button>
                </header>
                <ul className={styles.exerciseList}>
                    {exerciseList.map((exercise, index) => {
                        return (
                            <Exercise
                                exercise={exercise}
                                key={exercise.name}
                                addExercise={addExercise}
                                removeExercise={removeExercise}
                                mode={mode}
                                setReplacementExercise={setReplacementExercise}
                                index={index}
                                toggledIndex={toggledIndex}
                                setToggledIndex={setToggledIndex}
                                />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Exercises;