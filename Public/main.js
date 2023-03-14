var firebaseConfig = {
    apiKey: "AIzaSyAcnHj1N5rblyBgCsrJ5v7mB-8fE7A5Qs8",
    authDomain: "portfolio-001-c2398.firebaseapp.com",
    projectId: "portfolio-001-c2398",
    storageBucket: "portfolio-001-c2398.appspot.com",
    messagingSenderId: "974853268777",
    appId: "1:974853268777:web:242417d49d66b93affc338",
    measurementId: "G-DQ1RE3Y8DF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, message);
  
    saveContactInfo(name, email, message);
  
    document.querySelector(".contact-form").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      message: message,
    });
  }