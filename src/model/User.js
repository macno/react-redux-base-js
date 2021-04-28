import { capitalize } from '../app/utils'

class User {

    constructor(id, first_name, last_name, username, email, last_login, is_staff, is_active, is_superuser) {
      this._id = id
      this._first_name = first_name;
      this._last_name = last_name;
      this._username = username;
      this._email = email;
      this._last_login = last_login;
      this._is_staff = is_staff;
      this._is_active = is_active;
      this._is_superuser = is_superuser;
    }

    get name() {
        return `${capitalize(this._first_name)} ${capitalize(this._last_name)}`;
    }
    
    get id() {
      return this._id;
    }

    get first_name() {
      return this._first_name;
    }

    get last_name() {
      return this._last_name;
    }
    
    get username() {
      return this._username;
    } 
    
    get email() {
      return this._email;
    }
    
    get last_login() {
      return this._last_login;
    } 
    
    get is_staff() {
      return this._is_staff;
    } 
    
    get is_active() {
      return this._is_active;
    } 
    
    get is_superuser() {
      return this._is_superuser;
    }
    
  }