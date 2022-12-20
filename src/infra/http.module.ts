import { UnreadNotification } from '@use-cases/unread-notification';
import { ReadNotification } from '@use-cases/read-notification';
import { CountRecipientNotifications } from './../use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@use-cases/get-recipient-notifications';
import { CancelNotification } from '@use-cases/cancel-notification';
import { DatabaseModule } from '@infra/database/database.module';
import { SendNotification } from '@use-cases/send-notification';
import { NotificationsController } from '@infra/http/controllers/notifications.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    GetRecipientNotifications,
    CountRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
