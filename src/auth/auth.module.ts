import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { EncryptionService } from 'src/encryption/encryption.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constants';
@Module({
  imports : [TypeOrmModule.forFeature([User]),
  JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '1h' },
  })],
  controllers: [AuthController],
  providers: [AuthService,EncryptionService],
})
export class AuthModule {}
