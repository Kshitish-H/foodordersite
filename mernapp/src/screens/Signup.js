import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [credentials, setcredentials] = useState({name: "", email: "", password: "", location: ""});
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/creatuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location:credentials.location})
    })
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials");
    }
  }
  const onChange = (event)=>{
    setcredentials({...credentials, [event.target.name]:event.target.value});
  }

  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="location" className="form-label">location</label>
    <input type="text" className="form-control" name='location' value={credentials.location} onChange={onChange}/>
  </div>

  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
</form>
</div>
    </>
  )
}
