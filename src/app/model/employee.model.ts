import {Role} from './role.model';

export class Employee {

  private emId: number;
  private role: Role;
  private emMail: string;
  private emPassword: string;

  constructor(emId: number, role: Role, emMail: string, emPassword: string) {
    this.role = role;
    this.emId = emId;
    this.emMail = emMail;
    this.emPassword = emPassword;
  }

  get _emId(): number {
    return this.emId;
  }

  set _emId(value: number) {
    this.emId = value;
  }

  get _role(): Role {
    return this.role;
  }

  set _role(value: Role) {
    this.role = value;
  }

  get _emMail(): string {
    return this.emMail;
  }

  set _emMail(value: string) {
    this.emMail = value;
  }

  get _emPassword(): string {
    return this.emPassword;
  }

  set _emPassword(value: string) {
    this.emPassword = value;
  }
}
