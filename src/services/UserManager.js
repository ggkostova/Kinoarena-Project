import localStorageManager from './LocalStorageManager';

class User {
    constructor(username, age, password) {
        this.username = username;
        this.age = age;
        this.password = password;
    }
}

class UserManager {
    constructor() {
        let logged = JSON.parse(localStorage.getItem('loggedUser'));
        if (logged) {
            this.loggedUser = new User(logged.username, logged.age, logged.password);
        }
        this.users = [new User('gosho', 24, '4444'), new User('pesho', 27, '1234')];

        (() => {
            const addArrayToLocalStorage = (users) => {
                localStorage.setItem('users', JSON.stringify(users));
            }

            if (localStorage.getItem('users') === null) {
                addArrayToLocalStorage([new User('gosho', "22", '4444'), new User('pesho', '48', '1234')]);
            }
        })();
    }
        
    loggedUser = null;    

    isUserLoggedIn = () =>{
        if(this.loggedUser){
            return true;
        }else{
            return false;
        }
    }

    login = (username, password) => {
        localStorageManager.getItem("users")
            .then(users => {
                let existingUser = users && users.find(user => user.username === username && user.password === password);
                if (existingUser) {
                    this.loggedUser = existingUser;
                    localStorageManager.setItem("loggedUser", existingUser);
                } else {
                    alert("there is no such user!")
                }
            })  
    }    

    register = (username, age, password, confirmPassword) => {
        localStorageManager.getItem("users")
            .then(users => {
                let existingUser = users.find(user => user.username === username);
                if (!existingUser) {
                    if(password === confirmPassword){
                        this.users.push(new User(username, age, password));
                        localStorageManager.setItem('users', this.users);
                        return true;
                    }else{
                        alert("The password and confirm password must be equal.");
                        return false;    
                    }
                } else {
                    alert("There is already user with this username.");
                    return false;
                }
            }) 
            .catch(error => {
                console.error(error);
                return false;
            });
    }

    logout = () =>{
        localStorageManager.removeItem("loggedUser");
    }
}

let userManager = new UserManager();

export default userManager;

