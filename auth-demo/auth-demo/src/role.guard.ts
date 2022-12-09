import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './user/role.enum';

@Injectable()
class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roleRequired = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!roleRequired) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    console.log(user.role);
    console.log(user);
    console.log(roleRequired);
    return roleRequired.some((role) => user.role === role);
  }
}

export default RoleGuard;
