import styles from '../styles/workout.module.css';
import MoreButton from './MoreButton.js';

function WorkoutTemplate({ name, exercises }) {


    return (
        <figure className={styles.template}>
            <header className={styles.templateHeader}>
                <h4 className='bold'>{name}</h4>
                <MoreButton />
            </header>
            {!exercises && <p>Add new Template</p>}
            <ul className={styles.exercises}>
                {exercises && exercises.slice(0, 3).map((exercise) => {
                    return <li key={exercise}>{exercise}</li>
                })}
                {exercises && exercises.length > 3 && <li className='bold'>...</li>}
            </ul>
        </figure>
    );
}

export default WorkoutTemplate;