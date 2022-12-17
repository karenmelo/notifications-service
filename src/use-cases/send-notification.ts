import { NotificationsRepository } from 'src/application/repositories/notifications-reporistory';
import { Notification } from '../application/entities/notification';
import { Content } from '../application/ValueObjects/content';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificatonResponse {
  notification: Notification;
}

export class SendNotificaton {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificatonResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationRepository.create(notification);

    return {
      notification,
    };
  }
}
