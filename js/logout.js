const logout = document.getElementById("logout")

logout.addEventListener("click", function (event) {
	// stop form submission
	event.preventDefault();
    console.log("working")
    fetch('http://127.0.0.1:3000/users/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    location.href = '/signin.html';
});