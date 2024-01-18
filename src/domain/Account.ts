import Cpf from "./Cpf";
import { Email } from "./Email";
import { Password } from "./Password";

export class Account {

  private constructor(
    public id: string,
    public username: string,
    public cpf: Cpf,
    public password: Password,
    public email: Email
  ) { }

  static create(username: string, cpf: string, password: string, email: string): Account {
    const id = crypto.randomUUID();

    return new Account(id, username, new Cpf(cpf), new Password(password), new Email(email));
  }
}