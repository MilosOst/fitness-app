import styles from '../../../styles/exerciseset.module.css';
import checkIcon from '../../../images/svgs/check.svg';
import checkConfirmedIcon from '../../../images/svgs/check-confirmed.svg';
import removeIcon from '../../../images/svgs/remove.svg';
import { useContext, useState } from 'react';
import { WorkoutContext } from '../../../context/WorkoutContext.js';

function ExerciseSet({ entry, setIndex, exerciseIndex, id }) {
    const [confirmed, setConfirmed] = useState(entry.confirmed);
    const [reps, setReps] = useState(entry.reps || '');
    const [weight, setWeight] = useState(entry.weight || '');

    const { confirmSet, removeSet } = useContext(WorkoutContext);

    const handleSubmit = (e) => {
        console.log('Submitted');
        e.preventDefault();
        if (!confirmed) {
            confirmSet(exerciseIndex, setIndex, reps, weight);
        }
        setConfirmed(!confirmed);
    };

    return (
        <tr className={confirmed ? styles.confirmed : ''} onClick={() => console.log(entry)}>
            <td className={styles.setNum}><p className={confirmed ? styles.confirmed : ''}>{setIndex}</p></td>
            <td>
                <input
                    type='number'
                    className={`${styles.inputBox} ${confirmed ? styles.confirmed : ''}`}
                    value={weight}
                    min={0}
                    form={id}
                    onChange={(e) => setWeight(e.target.value)}
                    required/>
            </td>
            <td>
                <input
                    type='number'
                    className={`${styles.inputBox} ${confirmed ? styles.confirmed : ''}`}
                    value={reps}
                    placeholder='10'
                    min={0}
                    max={1000}
                    form={id}
                    onChange={(e) => setReps(e.target.value)}
                    required></input>
            </td>
            <td>
                <form onSubmit={handleSubmit} id={id}>
                    <button type='submit' className={`${styles.btn} ${styles.confirmBtn}`}>
                        <img src={confirmed ? checkConfirmedIcon : checkIcon} alt='Confirm' />
                    </button>
                </form>
            </td>
            <td>
                <button className={`${styles.btn} ${styles.removeBtn}`} onClick={() => removeSet(exerciseIndex, setIndex)}>
                    <img src={removeIcon} alt="Remove" />
                </button>
            </td>
        </tr>
    );
}

export default ExerciseSet;