import styles from '../styles/activeworkout.module.css';

function ExerciseSection({ exercise }) {


    return (
        <li className={styles.exerciseSection} onClick={() => console.log(exercise)}>
            <header className={styles.exerciseHeader}>
                <h3 className={styles.exerciseName}>{exercise.name}</h3>
            </header>
            <table className={styles.setsTable}>
                <colgroup>
                    <col className={styles.setCol}/>
                    <col className={styles.weightCol}/>
                    <col className={styles.repsCol}/>
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
                            <tr key={index}>
                                <td className={styles.setNum}>{index}</td>
                                <td><input type="number" className={styles.inputBox} value={entry.weight}/></td>
                                <td><input type="number" className={styles.inputBox} value={entry.reps || 10}></input></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </li>
    )


}

export default ExerciseSection;