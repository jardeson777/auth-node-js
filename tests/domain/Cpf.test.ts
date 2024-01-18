import Cpf from "../../src/domain/Cpf";

describe('CPF class', () => {
  test.each(["550.385.490-04", "147.854.460-05", "01930073046"])('it should be possible to create a CPF', (value) => {
    const cpf = new Cpf(value);
    expect(cpf.value).toBe(value);
  });

  test.each(["111111111111", "12345678910", ""])('it should not be possible to create an invalid CPF', async (value) => {
    expect(() => new Cpf(value)).toThrow(new Error("Invalid cpf"));
  });
});