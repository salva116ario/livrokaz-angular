import {Role} from './role.model';

export class Employee {

  public emId: number;
  public role: Role;
  public emMail: string;
  public emPassword: string;

  constructor(emId: number, role: Role, emMail: string, emPassword: string) {
    this.role = role;
    this.emId = emId;
    this.emMail = emMail;
    this.emPassword = emPassword;
  }

}
