const signupForm = document.querySelector("#signup");

signupForm.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();
    //console.log("hello")
	// validate the form
    let name=signupForm.elements["name"].value
    let email=signupForm.elements["email"].value
    let psw=signupForm.elements["psw"].value
    let psw_repeat=signupForm.elements["psw-repeat"].value
    
    const data = { name: name, email:email, password:psw };

    if(psw!==psw_repeat)
    {
        alert("Passwords do not match")
    }
    else if(psw===psw_repeat)
    {
        fetch('http://127.0.0.1:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
          alert("account created go to sigin to signin")
          //console.log('Success:', data);
        })
        .catch((error) => {
          alert("unable to create account")
          //console.error('Error:', error);
        });
        signupForm.elements["name"].value=""
        signupForm.elements["email"].value=""
        signupForm.elements["psw"].value=""
        signupForm.elements["psw-repeat"].value=""
    }
});
