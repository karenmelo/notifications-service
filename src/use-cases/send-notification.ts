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
  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificatonResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    return {
      notification,
    };
  }
}
