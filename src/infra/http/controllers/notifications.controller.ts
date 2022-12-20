import { CountRecipientNotifications } from './../../../use-cases/count-recipient-notifications';
import { UnreadNotification } from '@use-cases/unread-notification';
import { GetRecipientNotifications } from '@use-cases/get-recipient-notifications';
import { CancelNotification } from '@use-cases/cancel-notification';
import { NotificationViewModel } from './../view-models/notification-view-model';
import { SendNotification } from '@use-cases/send-notification';
import { ReadNotification } from '@use-cases/read-notification';
import { CreateNotificationBody } from '@infra/dtos/create-notification-body';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private getRecipientNotifications: GetRecipientNotifications,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countNotifications: CountRecipientNotifications,
  ) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationId: id,
    });
  }

  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countNotifications.execute({
      recipientId,
    });

    return { count };
  }
  @Get('get/from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId,
    });

    return {
      notifications: notifications.map(NotificationViewModel.toHTTP),
    };
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id,
    });
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({
      notificationId: id,
    });
  }
}
