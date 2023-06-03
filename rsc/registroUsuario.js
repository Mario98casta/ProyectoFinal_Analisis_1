import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js"
import { auth } from './firebase.js'


const registroForm = document.querySelector('#registro-form')

console.log(registroForm);

if (registroForm) {
    registroForm.addEventListener('submit', async (e) => {
        e.preventDefault()

        const usuario = registroForm['registroUsuario'].value
        const password = registroForm['registroContra'].value
        const confirmaPass = registroForm['registroConf'].value

        console.log(usuario, password, confirmaPass)

        try {
            if (confirmaPass === password) {
                const credencialesUsuario = await createUserWithEmailAndPassword(auth, usuario, password)
                console.log(credencialesUsuario)
                console.log('Bienvenido ' + usuario)

                // Mostrar el popup de bienvenida
                document.getElementById('popup-bienvenida').style.display = 'block';

            } else {
                alert('Las contraseñas no coinciden')
            }

        } catch (error) {
            console.log(error.message)

            if (error.code === 'auth/email-already-in-use') {
                alert('El correo ya esta registrado')
            } else if (error.code === 'auth/invalid-email') {
                alert('Correo Inválido')
            } else if (error.code === 'auth/weak-password') {
                alert('La contraseña es débil, debe tener al menos 6 caracteres')
            } else if (error.code) {
                alert('Hay un error en el registro')
            }
        }
    })

}


