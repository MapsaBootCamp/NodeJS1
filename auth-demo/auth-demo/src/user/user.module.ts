import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'User',
        useFactory: () => {
          const schema = userSchema;
          schema.pre('save', async function (next) {
            try {
              if (!this.isModified('password')) {
                next();
              } else {
                const hashedPass = await bcrypt.hash(this['password'], 10);
                this['password'] = hashedPass;
                next();
              }
            } catch (error) {
              next(error);
            }
          });
          return schema;
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
