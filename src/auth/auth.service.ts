import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import {EncryptionService} from './../encryption/encryption.service'
import { JwtService } from '@nestjs/jwt'; 


@Injectable()
export class AuthService {
  constructor ( 
    @InjectRepository(User) private userRepository : Repository<User>,
    private readonly encryptionService: EncryptionService,
    private jwtServices: JwtService
){}

   async login(createAuthDto: CreateAuthDto) {
    const {email,password} = createAuthDto
    const findUser = await this.userRepository.findOne({where : {email} })
    if (!findUser) {
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    }
    
    const decryptedPassword = this.encryptionService.decrypt(findUser.password);
    if (decryptedPassword !== password) {
      throw new HttpException('PASSWORD_INCORRECT', HttpStatus.FORBIDDEN);
    }

    const payload = { id: findUser.id, firstName: findUser.firstName };
    
    const token = this.jwtServices.sign(payload);
    
    return { token };
  } 
}
