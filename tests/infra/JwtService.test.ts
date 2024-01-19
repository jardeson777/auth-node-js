import JwtService from "../../src/infra/JwtService";

describe("JwtService", () => {
  test("should generate an access token", async () => {
    const jwtService = new JwtService({ tokenSecret: "any_secret" });
    const payload = { id: "123", email: "jardeson777@gmail.com" };
    const accessToken = jwtService.generateAccessToken(payload);
    expect(typeof accessToken).toBe("string");
  });

  test("should generate a refresh token", async () => {
    const jwtService = new JwtService({ tokenSecret: "any_secret" });
    const payload = { id: "123", email: "jardeson777@gmail.com" };
    const refreshToken = jwtService.generateRefreshToken(payload);
    expect(typeof refreshToken).toBe("string");
  });

  test("should verify a valid access token", async () => {
    const jwtService = new JwtService({ tokenSecret: "any_secret" });
    const payload = { id: "123", email: "jardeson777@gmail.com" };

    const accessToken = jwtService.generateAccessToken(payload);
    const verificationResult = jwtService.verifyAccessToken(accessToken);

    console.log(verificationResult)

    expect(verificationResult.valid).toBe(true);
    expect(verificationResult.decoded?.id).toEqual(payload.id);
    expect(verificationResult.decoded?.email).toEqual(payload.email);
  });

  test("should verify an invalid access token", async () => {
    const jwtService = new JwtService({ tokenSecret: "any_secret" });
    const invalidToken = "invalid_token";
    const verificationResult = jwtService.verifyAccessToken(invalidToken);
    expect(verificationResult.valid).toBe(false);
    expect(verificationResult.error).toBeDefined();
  });

  test("should verify a valid refresh token", async () => {
    const jwtService = new JwtService({ tokenSecret: "any_secret" });
    const payload = { id: "123", email: "jardeson777@gmail.com" };

    const refreshToken = jwtService.generateRefreshToken(payload);
    const verificationResult = jwtService.verifyRefreshToken(refreshToken);
    expect(verificationResult.valid).toBe(true);
    expect(verificationResult.decoded?.id).toEqual(payload.id);
    expect(verificationResult.decoded?.email).toEqual(payload.email);
  });

  test("should verify an invalid refresh token", async () => {
    const jwtService = new JwtService({ tokenSecret: "any_secret" });
    const invalidToken = "invalid_token";
    const verificationResult = jwtService.verifyRefreshToken(invalidToken);
    expect(verificationResult.valid).toBe(false);
    expect(verificationResult.error).toBeDefined();
  });

  test("should refresh an access token", async () => {
    const jwtService = new JwtService({ tokenSecret: "any_secret" });
    const payload = { id: "123", email: "jardeson777@gmail.com" };

    const refreshToken = jwtService.generateRefreshToken(payload);
    const newAccessToken = jwtService.refreshAccessToken(refreshToken);
    expect(typeof newAccessToken).toBe("string");
  });
});