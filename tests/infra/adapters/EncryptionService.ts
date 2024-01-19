import { EncryptionService } from "../../../src/infra/adapters/EncryptionService";

describe("EncryptionService", () => {
  test("should encrypt a value", async () => {
    const encrypt = new EncryptionService();
    const value = "any_value";
    const encryptedValue = await encrypt.encrypt(value);

    expect(encryptedValue).not.toBe(value);
  });

  test("should compare a value with its hash", async () => {
    const encrypt = new EncryptionService();
    const value = "any_value";
    const encryptedValue = await encrypt.encrypt(value);

    expect(await encrypt.compare(value, encryptedValue)).toBe(true);
  });
});