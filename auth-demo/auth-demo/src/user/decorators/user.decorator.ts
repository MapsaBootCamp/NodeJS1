import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const requet = ctx.switchToHttp().getRequest();
  if (data) {
    return requet.user[data];
  }

  return requet.user;
});
