import { Account } from "../../src/domain/Account";

describe("Account", () => {
  test("it should be possible to create an account", () => {
    const account = Account.create("jardeson", "19540756774", "Abc1234.", "jardeson777@gmail.com");

    expect(account.id).toBeDefined();
    expect(account.username).toBe("jardeson");
    expect(account.cpf.value).toBe("19540756774");
    expect(account.password.value).toBeDefined();
    expect(account.email.value).toBe("jardeson777@gmail.com");
  });
});