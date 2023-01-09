import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation, Message, User } from '@typeorm/entities';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.get<any>('DB_TYPE'),
        url: configService.get<string>('DB_URL'),
        entities: [User, Conversation, Message],
        synchronize: true,
        migrationsRun: true, // Will run migrations every time the app starts
        migrations: ['dist/database/migrations/*.js'], // Links to the migrations (in /dist because: after build)
        ...(configService.get<boolean>('DB_SSL')
          ? {
              ssl: true,
              extra: {
                ssl: {
                  rejectUnauthorized: false,
                },
              },
            }
          : {}),
      }),
    }),
  ],
})
export class DatabaseModule {}
