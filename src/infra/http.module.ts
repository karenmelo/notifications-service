import { DatabaseModule } from './database/database.module';
import { SendNotificaton } from './../use-cases/send-notification';
import { NotificationsController } from './http/controllers/notifications.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotificaton],
})
export class HttpModule {}
