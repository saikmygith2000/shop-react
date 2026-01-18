import './login.css'
import { useState } from 'react'
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom'

export default function Login(){
	const [username, setUsername] = useState('');
  	const [password, setPassword] = useState('');
	const location = useLocation();
	const navigate = useNavigate();
	
  	const handleLogin = async (e) => {
		e.preventDefault(); // Prevents page reload
		
		const origin = location.state?.from?.pathname || '/';
		
		axios.post('http://localhost:8080/api/login', {
            userName: username,
            password: password
        },{
		    withCredentials: true // THIS IS REQUIRED FOR COOKIES
		})
        .then(response => {
            if (response.status === 200) {
				if(response.data.includes("successful")){
					navigate(origin,{replace:true})
				}else{
					console.log(response.data);
				}
            }
        })
        .catch(error => {
            console.log('There was an error logging in!',error);
    	});
  	};
	
  	return (
		<div className="login-block">
	    	<div className="log-inner">
		      <h1>Login Page</h1>
		      <form onSubmit={handleLogin}>
	        	<input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
				<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
		        <button type="submit">Login</button>
		      </form>
	    	</div>
		</div>
  	)
}