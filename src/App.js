import './styles/global.css';
import Sidebar from './components/Sidebar.js';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Sidebar />
			<div className="main-content">
				<Routes>
					<Route path='/home' element={<h1>Hello</h1>}/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
