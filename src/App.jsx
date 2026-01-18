import './App.css'
import Login from './login/Login'
import Home from './login/Home'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

function App() {
  
  return (
	<div>
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login/>}/>
				<Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
				<Route path="/" element={<Navigate to="/home" />} />
			</Routes>
		</BrowserRouter>
	</div>
  )
}

export default App
