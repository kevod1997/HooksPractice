import React, {useState} from 'react'

export default function Test() {  
  const [user, setUser] = useState({
    name: '',
    email:'',
    surname:'',
    username:'',
    password:'',
    country:'',
    city:'',
    address:'',
  });

  const changeUser = (e) => {
    setUser((prev)=> ({...prev, [e.target.name]:e.target.value}))
  }

  return (
    <div>
        <h2>User:</h2>
        <input type='text' placeholder='name' name='name' onChange={changeUser} />
        <input type='text' placeholder='surname' name='surname' onChange={changeUser} />
        <input type='text' placeholder='username' name='username' onChange={changeUser} />
        <input type='text' placeholder='email' name='email' onChange={changeUser} />
        <input type='text' placeholder='password' name='password' onChange={changeUser} />
        <input type='text' placeholder='country' name='country' onChange={changeUser} />
        <input type='text' placeholder='city' name='city' onChange={changeUser} />
        <input type='text' placeholder='address' name='address' onChange={changeUser} />
        <button onClick={changeUser}>Change Username</button>
        <span>Username is: {user.name}</span>
    </div>
  )
}
