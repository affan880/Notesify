import auth from '@react-native-firebase/auth';

export const createUser = (email, password) => {
  console.log(email, password)

 auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
  // Signed in 
   console.log("user created!!")
  var user = userCredential;
  console.log("user", user);
  // ...
})
  .catch((error) => {
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // console.log(errorCode, errorMessage);
    // ..
    console.log("err")
  }
  );
}

export const logIn = async (email, password) => {
   auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("user", user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}
