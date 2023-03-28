// Importamos funciones de google
import { auth, createUserWithEmailAndPassword, updateProfile } from "../config.js";

// Recogemos los datos del formulario
const registerForm = document.querySelector('#register-form');
const divError = document.querySelector('#error')



registerForm.addEventListener('submit', (event)=>{
  event.preventDefault();
  let name = event.target[0].value;
  let email = event.target[1].value;
  let password = event.target[2].value;
  let confirmedPassword = event.target[3].value;
  
  if(password === confirmedPassword){
    // Enviar los datos a firestore
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      // Actualizamos nombre
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: '../img/perfil.png'
      })


      divError.innerText = '';
      alert('Usuario creado exitosamente');
      window.location = "../views/login.html"
    })
    .catch((error) => {
      console.log(error.code);
      if(error.code === 'auth/email-already-in-use'){
        divError.innerText = 'El correo ya se encuentra registrado';
      } else if(error.code === 'auth/invalid-email'){
        divError.innerText = 'Correo inválido';
      } else if(error.code === 'auth/invalid-email'){
        divError.innerText = 'La contraseña debe tener por lo menos 6 caracteres';
      }
    });
  }else{
    divError.innerText = "Las contraseñas no coinciden"
  }
})