import styles from '../../../styles/exercises.module.css';
import closeIcon from '../../../images/svgs/remove.svg';
import { Link } from 'react-router-dom';
import { exerciseList } from '../../../data/exerciseList.js';

function Exercises({ setSelecting }) {



    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <header className={styles.header}>
                    <button className={styles.closeBtn} onClick={() => setSelecting(false)}>
                        <img src={closeIcon} alt="Close" />
                    </button>
                    <Link to='addExercise'>New</Link>
                    <button className={styles.addBtn} onClick={() => setSelecting(false)}>
                        Add
                    </button>
                </header>
                <ul className={styles.exerciseList}>
                    {exerciseList.map((exercise) => {
                        return (
                            <li key={exercise.name} className={styles.exercise}>
                                <div className={styles.imgBox}>
                                    <img src={exercise.img} alt={exercise.name} />
                                </div>
                                <div className={styles.exerciseInfo}>
                                    <h3 className={styles.name}>{exercise.name}</h3>
                                    <h4 className={styles.bodyPart}>{exercise.bodyPart}</h4>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Exercises;