import { capitalize } from '../app/utils'

class User {

  constructor(_id, first_name, last_name, username, email, last_login, is_staff, is_active, is_superuser) {
    if (!arguments.first_name) {
      this.id = _id.id
      this.first_name = _id.first_name;
      this.last_name = _id.last_name;
      this.username = _id.username;
      this.email = _id.email;
      this.last_login = _id.last_login;
      this.is_staff = _id.is_staff;
      this.is_active = _id.is_active;
      this.is_superuser = _id.is_superuser;      
    } else {
      this.id = _id
      this.first_name = first_name;
      this.last_name = last_name;
      this.username = username;
      this.email = email;
      this.last_login = last_login;
      this.is_staff = is_staff;
      this.is_active = is_active;
      this.is_superuser = is_superuser;
    }
  }

  get name() {
    return capitalize(this.first_name) + ' ' + capitalize(this.last_name);
  }

  // get id() {
  //   return this.id;
  // }

  // set id(num) {
  //   this.id(num);
  // }

  // get first_name() {
  //   return this.first_name;
  // }

  // set first_name(str) {
  //   this.first_name = str;
  // }

  // get last_name() {
  //   return this.last_name;
  // }

  // set last_name(str) {
  //   this.last_name = str;
  // }

  // get username() {
  //   return this.username;
  // }

  // set username(str) {
  //   this.username = str;
  // }

  // get email() {
  //   return this.email;
  // }

  // set email(str) {
  //   this.email = str;
  // }

  // get last_login() {
  //   return this.last_login;
  // }

  // set last_login(str) {
  //   this.last_login = str;
  // }

  // get is_staff() {
  //   return this.is_staff;
  // }

  // set is_staff(bool) {
  //   this.is_staff = bool;
  // }

  // get is_active() {
  //   return this.is_active;
  // }

  // set is_active(bool) {
  //   this.is_active = bool
  // }

  // get is_superuser() {
  //   return this.is_superuser;
  // }

  // set is_superuser(bool) {
  //   this.is_superuser = bool;
  // }

}

export default User;