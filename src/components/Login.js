import React from 'react'
import axios  from 'axios';
import swal from '@sweetalert/with-react'

export const Login = () => {
   
    const submitHandler = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = (email) => {
            return String(email)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
          };

        if(email === ''|| password===''){
            swal(
                <h2>Los campos no pueden estar vacios</h2>
            )
            return;
        }
        if(email !== '' || regexEmail.test(email)){
            swal(
                <h2>Email invalido</h2>
            )
            return;
        }

        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            swal(
                <h2>Credenciales invalidas</h2>
            )
            return;
        }
        axios
        .post('http://challenge-react.alkemy.org', {email, password})
        .then(res => {
            swal(
                <h2>Ingresaste al sitio</h2>
            )
            const tokenRecibido = res.data.token;
            localStorage.setItem('token', tokenRecibido);
            
        })
    }
    
  return (
    <>
    <h3>Formulario de login</h3>
    <form onSubmit={submitHandler}>
        <label>
        <span>Correo electronico: </span><br/>
        <input type='email' name='email'/>
        </label>
        <br/>
        <label>
        <span>Contraseña: </span><br/>
        <input type='password' name='password' />
        </label>
        <br/>
        <button type='submit' >Ingresar</button>
    </form>
    </>
  )
}
