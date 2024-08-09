import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private usersService: UsersService,
    private reflector: Reflector,
    private jwtService: JwtService,
    private userService : UsersService
 ){}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();

    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('No token provided');
    }

    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token) {
      throw new UnauthorizedException('Invalid token format');
    }

    try {
      const decoded = this.jwtService.verify(token);
      request.user = decoded; 
      const findUser =   await this.userService.findById(request.user.id)
      
      return roles.includes(findUser.rol);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }


  }
}
