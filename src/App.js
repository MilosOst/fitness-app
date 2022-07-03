import './styles/global.css';
import { Routes, Route } from 'react-router-dom';
import Workout from './components/Workout.js';
import SignIn from './components/Signin.js';
import { AuthContextProvider } from './context/AuthContext.js';
import Protected from './components/Protected.js';
import MainLayout from './components/MainLayout.js';


function App() {
	return (
		<div className="App">
			<AuthContextProvider>
				<div className="main-content">
					<Routes>
						<Route element={<Protected><MainLayout /></Protected>}>
							<Route index element={<div>HomePage</div>}/>
							<Route path='/workout' element={<Protected><Workout /></Protected>}/>
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
