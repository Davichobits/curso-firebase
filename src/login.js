// Importamos funciones de google
import {
  auth, 
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  provider,
} from "../config.js";

// Recogemos los datos del formulario
const loginForm = document.querySelector('#login-form');
const divError = document.querySelector('#error');
const googleBtnLogin = document.querySelector('#googleBtnLogin');

loginForm.addEventListener('submit', (event)=>{
  console.log(event)
  event.preventDefault();
  const email = event.target[0].value;
  const password = event.target[1].value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      window.location = "../views/profile.html"
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode)
      if(errorCode === 'auth/internal-error'){
        divError.innerText = 'Por favor ingresa una contraseña';
      }else if(errorCode === 'auth/wrong-password'){
        divError.innerText = 'Contraseña incorrecta';
      }else if(errorCode === 'auth/user-not-found'){
        divError.innerText = 'Usuario no encontrado';
      }
    });
});

googleBtnLogin.addEventListener('click', ()=>{
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const IdPdata = getAdditionalUserInfo(result)

      console.log('token: ', token)
      console.log('user: ', user)
      console.log('IdPdata', IdPdata)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log('Si hubo error')
      // ...
    });
});