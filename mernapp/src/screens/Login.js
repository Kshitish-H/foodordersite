import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {

  let navigate = useNavigate()

  const [credentials, setcredentials] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    })
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials");
    }
    if (json.success) {
      localStorage.setItem('token',json.authToken);
      console.log(localStorage.getItem('token'));
      navigate("/");
    }

  }
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  return (
    <div>

      <div className='container'>
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
          </div>


          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/signup" className="m-3 btn btn-danger">New user? Sign up</Link>
        </form>
      </div>

    </div>
  )
}
