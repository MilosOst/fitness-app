import './styles/global.css';
import { Routes, Route } from 'react-router-dom';
import Workout from './components/Workout.js';
import SignIn from './components/Signin.js';
import { AuthContextProvider } from './context/AuthContext.js';
import Protected from './components/Protected.js';
import MainLayout from './components/MainLayout.js';
import ActiveWorkout from './components/ActiveWorkout.js';
import { useState } from 'react';
import { WorkoutContext } from './context/WorkoutContext.js';


function App() {
	const [activeWorkout, setActiveWorkout] = useState({});

	const populateBreakdown = (exercises) => {
		exercises.forEach((exercise) => {
			// Add empty breakdown if one does not exist
			if (!exercise.breakdown) {
				exercise.breakdown = [];
				for (let i = 0; i < exercise.sets; i++) {
					exercise.breakdown.push({});
				}
			}
		});
		return exercises;
	}

	const updateActiveWorkout = (name, exercises) => {
        setActiveWorkout({
            name: name,
			exercises: populateBreakdown(exercises),
        });
		console.log(activeWorkout);
    };

	return (
		<div className="App">
			<AuthContextProvider>
				<div className="main-content">
					<Routes>
						<Route element={<Protected><MainLayout /></Protected>}>
							<Route index element={<div>HomePage</div>}/>
							<Route
								path='/workout'
								element={
								<WorkoutContext.Provider value={{activeWorkout, updateActiveWorkout}}>
									<Protected>
										<Workout/>
									</Protected>
								</WorkoutContext.Provider>
								}/>
							<Route path='/workout/active' element={<ActiveWorkout />} />
							<Route path='*' element={<div>HomePage</div>} />
						</Route>
						<Route path='/signin' element={<SignIn />} />
					</Routes>
				</div>
			</AuthContextProvider>
		</div>
	);
}

export default App;
