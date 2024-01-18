import { Password } from "../../src/domain/Password";

describe('Password class', () => {
  test.each(["Abc3214@"])('it should be possible to create a password', (value) => {
    const password = new Password(value);

    expect(password.value).toBeDefined();
  });

  test.each(["1234567", "123456", "Abc12345", "Abcdefgh.", "Abcdefghij", "abcdefghij"])('it should not be possible to create an invalid password', async (value) => {
    expect(() => new Password(value)).toThrow(new Error("Invalid password"));
  });
});