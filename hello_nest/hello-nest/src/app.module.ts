import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AddressModule } from './address/address.module';
import { TodoModule } from './todo/todo.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'todoDB.sqlite',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        TodoModule,
        AddressModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
