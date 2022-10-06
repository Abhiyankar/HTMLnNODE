const signinForm = document.querySelector("#signin")

signinForm.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();
    console.log("hello")
    let email=signinForm.elements["email"].value
    let psw=signinForm.elements["psw"].value
    console.log(email)
    console.log(psw)
    
    const data = { email:email, password:psw };

    fetch('http://127.0.0.1:3000/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    location.href = '/home.html';
});