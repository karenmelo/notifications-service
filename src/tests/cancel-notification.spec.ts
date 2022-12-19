import { Notification } from '@application/entities/notification';
import { CancelNotification } from '@use-cases/cancel-notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { Content } from '@application/ValueObjects/content';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotificaton = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      content: new Content('This is a notification'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    await notificationsRepository.create(notification);

    await cancelNotificaton.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });
});
