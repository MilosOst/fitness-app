import './styles/global.css';
import Sidebar from './components/Sidebar.js';
import { Routes, Route } from 'react-router-dom';
import Workout from './components/Workout.js';

function App() {
	return (
		<div className="App">
			<Sidebar />
			<div className="main-content">
				<Routes>
					<Route path='/home' element={<h1>Hello</h1>}/>
					<Route path='/workout' element={<Workout />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
