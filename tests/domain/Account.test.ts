import { Account } from "../../src/domain/Account";

describe("Account", () => {
  test("it should be possible to create an account", () => {
    const account = Account.create("jardeson", "19540756774", "12345678", "jardeson777@gmail.com");

    expect(account.id).toBeDefined();
    expect(account.username).toBe("jardeson");
    expect(account.cpf).toBe("19540756774");
    expect(account.password).toBeDefined();
    expect(account.email).toBe("jardeson777@gmail.com");
  });
});