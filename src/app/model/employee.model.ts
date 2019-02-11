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
    return this._emId;
  }

  set _emId(value: number) {
    this._emId = value;
  }

  get _role(): Role {
    return this._role;
  }

  set _role(value: Role) {
    this._role = value;
  }

  get _emMail(): string {
    return this._emMail;
  }

  set _emMail(value: string) {
    this._emMail = value;
  }

  get _emPassword(): string {
    return this._emPassword;
  }

  set _emPassword(value: string) {
    this._emPassword = value;
  }
}
