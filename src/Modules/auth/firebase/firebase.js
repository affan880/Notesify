import auth from '@react-native-firebase/auth';

export const createUser = (email, password) => {
 auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
   var user = userCredential;
   userCredential.user.sendEmailVerification();
   console.log(user);
   return true
})
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
    // ..
    console.log("err")
  }
  );
}


export const logIn = async (email, password) => {
   auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}

export const ResendVerification = async (email,password) => {
 auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    userCredential.user.sendEmailVerification();
    console.log("done");

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}


export const logOut = () => {
  auth().signOut().then(() => {
    console.log('User signed out!');
  });
}

export const getCurrentUser = () => {
  return auth().currentUser;
}

export const forgotPassword = (email) => {
  auth().sendPasswordResetEmail(email).then(() => {
    console.log('Password reset email sent!');
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}
