import jwt, { SignOptions } from 'jsonwebtoken';

type JwtServiceOptions = {
  tokenSecret: string;
}

type JwtPayload = {
  id: string;
  email: string;
}

class JwtService {
  private readonly tokenSecret: string;

  constructor(options: JwtServiceOptions) {
    this.tokenSecret = options.tokenSecret;
  }

  generateAccessToken(payload: JwtPayload, options?: SignOptions): string {
    return jwt.sign(payload, this.tokenSecret, options);
  }

  generateRefreshToken(payload: JwtPayload, options?: SignOptions): string {
    return jwt.sign(payload, this.tokenSecret, options);
  }

  verifyAccessToken(token: string): { valid: boolean; decoded?: JwtPayload; error?: string } {
    try {
      const decoded = jwt.verify(token, this.tokenSecret) as JwtPayload;
      return { valid: true, decoded };
    } catch (error: any) {
      return { valid: false, error: error.message };
    }
  }

  verifyRefreshToken(token: string): { valid: boolean; decoded?: JwtPayload; error?: string } {
    try {
      const decoded = jwt.verify(token, this.tokenSecret) as JwtPayload;
      return { valid: true, decoded };
    } catch (error: any) {
      return { valid: false, error: error.message };
    }
  }

  refreshAccessToken(refreshToken: string): string {
    const decoded = jwt.verify(refreshToken, this.tokenSecret) as JwtPayload;
    const newAccessToken = this.generateAccessToken(decoded);
    return newAccessToken;
  }
}

export default JwtService;
