class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // function for showing user profile
    showProfile(user) {
        this.clearAlert();
        // design the profile card here using inner HTML with Bootstrap
        this.profile.innerHTML = `    
    <div class="card card-body mb-3">
    <div class="row">
        <div class="col-mid-3">
            <img class="img-thumbnail  mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>

        </div>
        <div class="col-mid-9">
            <span class="badge badge-primary">
                Public Repos: ${user.public_repos}
            </span>
            <span class="badge badge-secondary">
                Public Gists: ${user.public_gists}
            </span>
            <span class="badge badge-success">
                Followers: ${user.followers}
            </span>
            <span class="badge badge-info">
                Following: ${user.following}
            </span>
            <br><br>
            <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: <a href="${user.blog}">${user.blog}</a></li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
        </div>
    </div>
    </div>

        `;
    }
    // for clearing the profile
    clearProfile() {
        this.profile.innerHTML = "";
    }

    // for showing alert
    showAlert(message, className) {
        this.clearAlert();
        this.clearProfile();
        let div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        let container = document.getElementById('search-container');
        let search = document.querySelector('.search');
        container.insertBefore(div, search); // adding div between search-container and search
    }

    clearAlert() {
        let currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
}