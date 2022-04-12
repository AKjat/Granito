// import React, { useEffect, useState } from "react";
// import "./SignInPage.css";

// import firebase from "firebase/SignInPage";
// import "firebase/auth";

// // react router
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// //components
// import SignIn from "./components/SignIn";
// import SignOut from "./components/SignOut";

// const SignInPage = () => {
//   const [viewOtpForm, setViewOtpForm] = useState(false);
//   const [user, setUser] = useState(false);
//   const firebaseConfig = {
//     apiKey: "AIzaSyBPlUUoZRP4LhuXUsv_0WgSMtj2du5DI5k",
//     authDomain: "trackman-bysavio.firebaseSignInPage.com",
//     projectId: "trackman-bysavio",
//     storageBucket: "trackman-bysavio.SignInPagespot.com",
//     messagingSenderId: "540424581903",
//     SignInPageId: "1:540424581903:web:1149938fd35dccc859047a",
//     measurementId: "G-LPHWV1CQWG",
//   };

//   useEffect(() => {
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//       "recaptcha-container",
//       {
//         size: "invisible",
//         callback: function (response) {
//           console.log("Captcha Resolved");
//           this.onSignInSubmit();
//         },
//         defaultCountry: "IN",
//       }
//     );
//   }, []);

//   if (!firebase.SignInPages.length) {
//     firebase.initializeSignInPage(firebaseConfig);
//   } else {
//     firebase.SignInPage(); // if already initialized, use that one
//   }

//   const auth = firebase.auth();

//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       setUser(user);
//     }
//   });

//   const loginSubmit = (e) => {
//     e.preventDefault();

//     let phone_number = "+91" + e.target.phone.value;
//     const SignInPageVerifier = window.recaptchaVerifier;

//     auth
//       .signInWithPhoneNumber(phone_number, SignInPageVerifier)
//       .then((confirmationResult) => {
//         // SMS sent. Prompt user to type the code from the message, then sign the
//         // user in with confirmationResult.confirm(code).
//         console.log("otp sent");
//         setViewOtpForm(true);
//         window.confirmationResult = confirmationResult;
//         // ...
//       })
//       .catch((error) => {
//         // Error; SMS not sent
//         // ...
//         alert(error.message);
//       });
//   };

//   const otpSubmit = (e) => {
//     e.preventDefault();

//     let opt_number = e.target.otp_value.value;

//     window.confirmationResult
//       .confirm(opt_number)
//       .then((confirmationResult) => {
//         console.log(confirmationResult);
//         console.log("success");
//         window.open("/", "_self");
//       })
//       .catch((error) => {
//         // User couldn't sign in (bad verification code?)
//         alert(error.message);
//       });
//   };

//   const signOut = () => {
//     firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         window.open("/signin", "_self");
//       })
//       .catch((error) => {
//         // An error hSignInPageened.
//         console.log(error);
//       });
//   };

//   return (
//     <Router>
//       <div id="recaptcha-container"></div>
//       <Routes>
//         <Route path="/" exact>
//           <SignOut signOut={signOut} user={user} />
//         </Route>
//         <Route path="/signin" exact>
//           <SignIn
//             loginSubmit={loginSubmit}
//             otpSubmit={otpSubmit}
//             viewOtpForm={viewOtpForm}
//           />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default SignInPage;