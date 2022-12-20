import { makeNotification } from '@test/factories/notification-factory';
import { NotificationNotFound } from './../use-cases/errors/notification-not-found';
import { UnreadNotification } from '@use-cases/unread-notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

describe('Unread notification', () => {
  it('should be able to unrread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotificaton = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);

    await unreadNotificaton.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to Unread a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const UnreadNotificaton = new UnreadNotification(notificationsRepository);

    expect(() => {
      return UnreadNotificaton.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
