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
    this.users = [new User("gosho", "4444"), new User("pesho", "1234")];

    (() => {
      const addArrayToLocalStorage = (users) => {
        localStorage.setItem("users", JSON.stringify(users));
      };

      if (localStorage.getItem("users") === null) {
        addArrayToLocalStorage([
          new User("gosho", "4444"),
          new User("pesho", "1234"),
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
    
    if (!username.trim() || !password.trim()) {
      this.errorMessage = "Username and password cannot be empty.";
      return Promise.reject(this.errorMessage);
    }

    if (username.length < 3 || password.length < 6) {
      this.errorMessage =
        "Username must be at least 3 characters and password must be at least 6 characters.";
      return Promise.reject(this.errorMessage);
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      this.errorMessage =
        "Password must have at least one uppercase letter, one lowercase letter, one digit, and one special character.";
      return Promise.reject(this.errorMessage);
    }

    return localStorageManager.getItem("users").then((users) => {
      let existingUser =
        users && users.find((user) => user.username === username);
      if (existingUser) {
        this.errorMessage = "Username is already taken.";
        return Promise.reject(this.errorMessage);
      } else {
        let newUser = new User(username.trim(), password);
        users.push(newUser);
        localStorageManager.setItem("users", users);
        return Promise.resolve("User registered successfully");
      }
    });
  };

  logout = () => {
    localStorageManager.removeItem("loggedUser");
  };
}

let userManager = new UserManager();

export default userManager;
