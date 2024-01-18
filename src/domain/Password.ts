export class Password {
  constructor(readonly value: string) {
    if (!this.validate(value)) throw new Error("Invalid password");
  }

  private validate(password: string) {
    if (!password) return false;
    if (!this.hasAtLeastEightCharacters(password)) return false;
    if (!this.hasAtLeastOneSpecialCharacter(password)) return false;
    if (!this.hasAtLeastOneLowerCaseLetter(password)) return false;
    if (!this.hasAtLeastOneUpperCaseLetter(password)) return false;
    if (!this.hasAtLeastOneNumber(password)) return false;
    return true;
  }

  private hasAtLeastOneNumber(password: string) {
    return /[0-9]/.test(password);
  }

  private hasAtLeastOneUpperCaseLetter(password: string) {
    return /[A-Z]/.test(password);
  }

  private hasAtLeastOneLowerCaseLetter(password: string) {
    return /[a-z]/.test(password);
  }

  private hasAtLeastOneSpecialCharacter(password: string) {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  }

  private hasAtLeastEightCharacters(password: string) {
    return password.length >= 8;
  }
}