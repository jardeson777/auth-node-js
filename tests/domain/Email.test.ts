import { Email } from "../../src/domain/Email";

describe('Email class', () => {
  test('it should be possible to create an email', () => {
    const email = new Email("jardeson777@gmail.com");

    expect(email.value).toBe("jardeson777@gmail.com");
  });

  test.each(["", "j@", "jardeson777@gmail", ".com", "j@j."])('it should not be possible to create an invalid email', (value) => {
    expect(() => new Email(value)).toThrow(new Error("Invalid email"));
  });
});