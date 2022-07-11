import { useContext, useState } from 'react';
import { WorkoutContext } from '../../../context/WorkoutContext.js';
import styles from '../../../styles/workout.module.css';
import MoreButton from '../../MoreButton.js';

function WorkoutTemplate({ name, exercises }) {
    const [open, setOpen] = useState(false);
    
    const { updateActiveWorkout } = useContext(WorkoutContext);

    const handleStartWorkout = () => {
        updateActiveWorkout(name, exercises);
        setOpen(false);
    };

    return (
        <div>
            <figure className={styles.template} onClick={() => setOpen(true)}>
                <header className={styles.templateHeader}>
                    <h4 className='bold'>{name}</h4>
                </header>
                {!exercises && <p>Add new Template</p>}
                <ul className={styles.exercises}>
                    {exercises && exercises.slice(0, 3).map((exercise) => {
                        return <li key={exercise.name} className={styles.exercise}>{exercise.sets} x {exercise.name}</li>
                    })}
                    {exercises && exercises.length > 3 && <li className='bold'>...</li>}
                </ul>
            </figure>
            {open && 
                <div className={styles.detailModal}>
                    <figure className={styles.detailedTemplate}>
                        <header className={styles.templateHeader}>
                            <h4 className='bold'>{name}</h4>
                        </header>
                        {!exercises && <p>Add new Template</p>}
                        <ul className={styles.exercises}>
                            {exercises && exercises.map((exercise) => {
                                return <li key={exercise.name} className={styles.exercise}>{exercise.sets} x {exercise.name}</li>
                            })}
                        </ul>
                        <button className={styles.closeBtn} onClick={() => setOpen(false)}>
                            +
                        </button>
                        <button className={styles.workoutBtn} onClick={handleStartWorkout}>
                            Start Workout
                        </button>
                    </figure>
                </div>
            }
        </div>
    );
}

export default WorkoutTemplate;