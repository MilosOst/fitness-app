import styles from '../../../styles/activeworkout.module.css';
import expandIcon from '../../../images/svgs/expand-up.svg';
import { useContext, useState } from 'react';
import { WorkoutContext } from '../../../context/WorkoutContext.js';
import Exercises from './Exercises.js';
import ExerciseSection from './ExerciseSection.js';
import { uuidv4 } from '@firebase/util';

function ActiveWorkout({ name, exercises }) {
    const [expanded, setExpanded] = useState(false);
    const [selecting, setSelecting] = useState(false);
    const [mode, setMode] = useState();
    const [replaceIndex, setReplaceIndex] = useState();

    const { activeWorkout } = useContext(WorkoutContext);

    const handleReplace = (index) => {
        setSelecting(true);
        setMode('Replace');
        setReplaceIndex(index);
    }; 
    

    return (
        <div className={`${styles.container} ${expanded ? styles.expanded : ''}`}>
            <button
                className={expanded ? `${styles.expandBtn} ${styles.close}` : styles.expandBtn}
                onClick={() => setExpanded(!expanded)}>
                <img src={expandIcon} alt="" />
            </button>
            <h3 className='bold'>{name}</h3>

            {expanded && 
            <ul className={styles.exerciseList}>
                {activeWorkout.exercises.map((exercise, index) => {
                    return (
                        <ExerciseSection exercise={exercise} key={uuidv4()} exerciseIndex={index} handleReplace={handleReplace}/>
                    );
                })}
            <button
                className={`${styles.addBtn} ${styles.addExercise}`}
                onClick={() => {
                    setSelecting(true);
                    setMode('Add');
                }}>
                Add Exercise
            </button>

                {selecting && <Exercises setSelecting={setSelecting} mode={mode} replaceIndex={replaceIndex}/>}
            </ul>
            }
        </div>
    );

}


export default ActiveWorkout;