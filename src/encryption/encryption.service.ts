import { Injectable } from '@nestjs/common';
import { createCipheriv, createDecipheriv } from 'crypto';
import { config } from 'dotenv';

config(); 

@Injectable()
export class EncryptionService {
  private readonly algorithm = 'aes-256-cbc';
  private readonly key = Buffer.from(process.env.ENCRYPTION_KEY, 'base64'); // Clave en formato base64
  private readonly iv = Buffer.from(process.env.ENCRYPTION_IV, 'base64');   // IV en formato base64

  constructor() {
    if (this.key.length !== 32) {
      throw new Error('Invalid key length. Key must be 32 bytes (256 bits)');
    }
    if (this.iv.length !== 16) {
      throw new Error('Invalid IV length. IV must be 16 bytes (128 bits)');
    }
  }

  encrypt(text: string): string {
    const cipher = createCipheriv(this.algorithm, this.key, this.iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  decrypt(encryptedText: string): string {
    const decipher = createDecipheriv(this.algorithm, this.key, this.iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}
