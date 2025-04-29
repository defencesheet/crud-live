import React from 'react'
import axios from 'axios'
const Register = () => {
    const handleregister =async (e) =>{
        e.preventDefault()
        const user = {
            name: e.target.name.value,
            age: e.target.age.value
        }
        await axios.post('http://localhost:9000/users', user)
       alert('User Registered Successfully')

    }
  return (
    <div style={{border:"2px solid red"}}>
      <h1 style={{color:'black'}}>Register User</h1>
      <form onSubmit={handleregister}>
        <label>Name:</label> <input type='text' name='name' />
        <label>Age:</label> <input type='text' name='age' />
        <button style={{border:'1px solid black',background:"green"}} type='submit'>Register</button>
      </form>
    </div>
  )
}
export default Register