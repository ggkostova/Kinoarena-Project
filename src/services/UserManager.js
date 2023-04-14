import NavigationBar from '../components/Navigation';

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

}


class UserManager {
    constructor() {
        let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        if (loggedUser) {
            this.loggedUser = new User(loggedUser.username, loggedUser.password);
        }

        (() => {
            const addArrayToLocalStorage = (users) => {
                localStorage.setItem('users', JSON.stringify(users));
            }

            addArrayToLocalStorage([new User('gosho', '4444'), new User('pesho', '1234')]);
        })();
    }

    loggedUser = null;

    users = JSON.parse(localStorage.getItem("users"));

    isUserLoggedIn = () =>{
        if(this.loggedUser){
            return true;
        }else{
            return false;
        }
    }

    login = (username, password) => {
        console.log(username, password);
        let foundUser = this.users.find(user => user.username === username && user.password === password);

        if (foundUser) {
            this.loggedUser = foundUser;
            localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));

            return true;
        }

        return false;
    }

    register = (username, password, confirmPassword) => {
        let foundUser = this.users.find(user => user.username === username);
        console.log(this.users);
        if (!foundUser && (password === confirmPassword)) {
            this.users.push(new User(username, password));
            localStorage.setItem('users', JSON.stringify(this.users));
            return true;
        } else {
            alert("There is already user with this username.");
            return false;
        }
    }

}

let userManager = new UserManager();

export default userManager;