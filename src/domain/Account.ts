export class Account {

  private constructor(
    public id: string,
    public username: string,
    public cpf: string,
    public password: string,
    public email: string
  ) { }

  static create(username: string, cpf: string, password: string, email: string): Account {
    const id = crypto.randomUUID();

    return new Account(id, username, cpf, password, email);
  }
}