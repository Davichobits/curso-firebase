// Importamos funciones de google
import {
  auth, 
  onAuthStateChanged,
  updateProfile,
  signOut,
  storageRef,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "../config.js";

// Seleccionamos el boton
const logoutBtn = document.querySelector('#logout-btn');
const userName = document.querySelector('#user-name');
const profileImg = document.querySelector('#profile-img')
const updatePhoto = document.querySelector('#update-photo');
const imageToUpload = document.querySelector('#imageToUpload');
const postForm = document.querySelector('#post-form');

// Observador
onAuthStateChanged(auth, user => {
  if(user){

    if(user.displayName){
      userName.innerText = user.displayName;
    }
    
    if(user.photoURL){
      profileImg.src = user.photoURL;
    }else{
      profileImg.src = '../img/perfil.png'
    }
    
  } else{
    console.log('Usuario deslogeado')
  }
})

// SubirFoto
postForm.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const file = e.target[1].files[0];
  
  if(file == null){
    alert('selecciona un archivo')
  }else{
    
    // const metadata = {
    //   contentType: file.type,
    // }
    // console.log(metadata)


    // 'file' comes from the Blob or File API
    const storageRef = ref(storage, 'imagenes');
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      console.log(snapshot)
      // getDownloadURL(storageRef)
      //   .then((url)=>{
      //     console.log(url)
      //     // imageToUpload.src = url;
      //   })
    });
  }
});

//Actualizar foto
// updatePhoto.addEventListener('change', (event)=>{
//   const fr = new FileReader();
//   fr.readAsDataURL(updatePhoto.files[0]);
//   console.log(fr)
//   fr.addEventListener('load', ()=>{
//     const url = fr.result
//     console.log(url)
//     updateProfile(auth.currentUser, {
//       photoURL: url
//     })
//     .then(()=>{
//       profileImg.src = url;
//     })
//     .catch((error)=>{
//       console.log(error.code)
//     }) 
//   });
// });

// Cerrar sesión
logoutBtn.addEventListener('click', ()=>{
  signOut(auth).then(() => {
    
    window.location = '../index.html'

  }).catch((error) => {
    // An error happened.
  });
});