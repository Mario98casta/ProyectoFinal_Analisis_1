import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js"
import { auth } from './firebase.js'

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', async e  => {
    e.preventDefault()

    const email = loginForm['loginEmail'].value
    const contrasena = loginForm['loginContrasena'].value

    try {
        const credenciales = await signInWithEmailAndPassword(auth , email, contrasena)

        console.log(credenciales)
    } catch (error) {
        console.log(error.message)

        if (error.code === 'auth/wrong-password') {
            alert('La contraseña es incorrecta.')
        } else if (error.code === 'auth/invalid-email') {
            alert('Correo Inválido')
        } else if (error.code === 'auth/user-not-found') {
            alert('El usuario no esta registrado')
        } else if (error.code) {
            alert('Hay un error en el login')
        }
    }
  
})