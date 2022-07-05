import { uuidv4 } from "@firebase/util";
import { render, screen } from "@testing-library/react";
import ExerciseSet from "../components/pages/workout/ExerciseSet.js";
import { WorkoutContext } from "../context/WorkoutContext.js";
import userEvent from "@testing-library/user-event";


const emptyExercise = {
    "confirmed": false
};

const filledExercise = {
    weight: 45,
    reps: 15,
    confired: true,
}

const confirmSet = jest.fn();
const removeSet = jest.fn();


describe('Basic rendering and button functionality', () => {
    test('renders empty exercise correctly', () => {
        render(
            <WorkoutContext.Provider value={{confirmSet, removeSet}}>
                <ExerciseSet entry={emptyExercise} id={uuidv4()} />
            </WorkoutContext.Provider>
        );
        const inputs = screen.getAllByRole('spinbutton');
        inputs.forEach((input) => expect(input.textContent).toBe(''));
    });

    test('renders non-empty exercise correctly', () => {
        render (
            <WorkoutContext.Provider value={{confirmSet, removeSet}}>
                <ExerciseSet entry={filledExercise} id={uuidv4()} />
            </WorkoutContext.Provider>
        );
        const inputs = screen.getAllByRole('spinbutton');
        expect(inputs[0].value).toBe(String(filledExercise.weight));
        expect(inputs[1].value).toBe(String(filledExercise.reps))
    });

    test('verify that confirm button calls confirm function only when not confirmed', () => {
        render (
            <WorkoutContext.Provider value={{confirmSet, removeSet}}>
                <ExerciseSet entry={filledExercise} id={uuidv4()} />
            </WorkoutContext.Provider>
        );
        const confirmBtn = screen.getByRole('button', {name: 'Confirm'});
        userEvent.click(confirmBtn);

        // Since it is confirmed now, it shouldn't call the function again
        userEvent.click(confirmBtn);
        expect(confirmSet).toHaveBeenCalledTimes(1);
    });

    test('remove button calls correct function', () => {
        render (
            <WorkoutContext.Provider value={{confirmSet, removeSet}}>
                <ExerciseSet entry={filledExercise} id={uuidv4()} />
            </WorkoutContext.Provider>
        );
        const removeBtn = screen.getByRole('button', {name: 'Remove'});
        userEvent.click(removeBtn);
        expect(removeSet).toHaveBeenCalledTimes(1);
    });
});