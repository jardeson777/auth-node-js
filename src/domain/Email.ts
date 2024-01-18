export class Email {
  constructor(readonly value: string) {
    if (!this.validate(value)) throw new Error("Invalid email");
  }

  private validate(email: string) {
    if (!email) return false;
    if (!this.hasAtLeastOneAtSign(email)) return false;
    if (!this.hasAtLeastOneDot(email)) return false;
    if (!this.hasAtLeastOneCharacterAfterAtSign(email)) return false;
    if (!this.hasAtLeastOneCharacterBeforeAtSign(email)) return false;
    if (!this.hasOnlyOneAtSign(email)) return false;
    if (!this.hasAtLeastTwoCharactersAfterDot(email)) return false;
    return true;
  }

  private hasAtLeastOneDot(email: string) {
    return email.includes(".");
  }

  private hasAtLeastOneAtSign(email: string) {
    return email.includes("@");
  }

  private hasAtLeastOneCharacterAfterAtSign(email: string) {
    return email.split("@")[1].length > 0;
  }

  private hasAtLeastOneCharacterBeforeAtSign(email: string) {
    return email.split("@")[0].length > 0;
  }

  private hasOnlyOneAtSign(email: string) {
    return email.split("@").length === 2;
  }

  private hasAtLeastTwoCharactersAfterDot(email: string) {
    return email.split(".")[1].length >= 2;
  }
}