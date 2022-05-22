import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if (auth)
        {
            navigate('/')
        }
      })
      const handleLogin = async () => {
        console.log("email,password", email, password)
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'content-Type': 'application/json'
            },
        });
        result = await result.json()
        console.log(result);
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate('/')
        } else {
            alert("Please enter correct details")
        }
    }
    return (
        <div className='login'>
            <h1>LogIn</h1>
            <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

            <button onClick={handleLogin} className="appButton1" type="Button">LogIn</button>
        </div>
    )
}
export default Login;