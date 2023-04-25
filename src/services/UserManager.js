import localStorageManager from "./LocalStorageManager";

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

class UserManager {
  constructor() {
    let logged = JSON.parse(localStorage.getItem("loggedUser"));
    if (logged) {
      this.loggedUser = new User(logged.username, logged.password);
    }
    this.users = [new User("gosho", "Gosho1@"), new User("pesho", "Pesho1@")];

    (() => {
      const addArrayToLocalStorage = (users) => {
        localStorage.setItem("users", JSON.stringify(users));
      };

      if (localStorage.getItem("users") === null) {
        addArrayToLocalStorage([
          new User("gosho", "Gosho1@"),
          new User("pesho", "Pesho1@"),
        ]);
      }
    })();
  }

  loggedUser = null;
  errorMessage = "";

  isUserLoggedIn = () => {
    if (this.loggedUser) {
      return true;
    } else {
      return false;
    }
  };

  login = (username, password) => {
    return localStorageManager.getItem("users").then((users) => {
      let existingUser =
        users &&
        users.find(
          (user) => user.username === username && user.password === password
        );
      if (existingUser) {
        this.loggedUser = existingUser;
        localStorageManager.setItem("loggedUser", existingUser);
        return true;
      } else {
        return false;
      }
    });
  };

  register = (username, password) => {
    return localStorageManager.getItem("users").then((users) => {
      let existingUser =
        users && users.find((user) => user.username === username);
      if (!existingUser) {
        let newUser = new User(username.trim(), password);
        users.push(newUser);
        localStorageManager.setItem("users", users);
        return true;
      }
    });
  };

  logout = () => {
    localStorageManager.removeItem("loggedUser");
  };
}

let userManager = new UserManager();

export default userManager;
