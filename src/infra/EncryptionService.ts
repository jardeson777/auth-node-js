import { hash, compare } from 'bcrypt';

export class EncryptionService {
  async encrypt(value: string): Promise<string> {
    return hash(value, 10);
  }

  async compare(value: string, encryptedValue: string): Promise<boolean> {
    return compare(value, encryptedValue);
  }
}