import { DatabaseModule } from '@infra/database/database.module';
import { SendNotificaton } from '@use-cases/send-notification';
import { NotificationsController } from '@infra/http/controllers/notifications.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotificaton],
})
export class HttpModule {}
