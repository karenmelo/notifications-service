import { DatabaseModule } from '@infra/database/database.module';
import { SendNotification } from '@use-cases/send-notification';
import { NotificationsController } from '@infra/http/controllers/notifications.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
