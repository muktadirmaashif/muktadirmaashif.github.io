let searchBtn = document.getElementById('searchBtn');
let searchUser = document.getElementById('searchUser');
let ui = new UI;
/* 
1. add an eventlistener to the search button that
    a. if user searches for some user, it would fetch the api and show the result. 
    do this using arrow function and .then() 
    b. if data not found, show alert. if found, show profile 
*/
// adding search button functionalities
searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;
    if(userText != '') {
        // if userText not empty, fetch api
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json()) // fetch result in json format
        .then(data => {
            //console.log(data)
            if(data.message == 'Not Found') {
                // show alert
                ui.showAlert("User Not Found!", "alert alert-danger");
            } else {
                // show profile
                ui.showProfile(data);
            }
        })
    } else {
        //clear profile
        ui.clearProfile();
    }
});