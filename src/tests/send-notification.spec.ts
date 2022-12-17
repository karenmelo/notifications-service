import { SendNotificaton } from '../use-cases/send-notification';
import { InMemoryNotificationsRepository } from './../../test/repositories/in-memory-notifications-repository';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificatinsRepository = new InMemoryNotificationsRepository();
    const sendNotificaton = new SendNotificaton(notificatinsRepository);

    await sendNotificaton.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notificatinsRepository.notifications).toHaveLength(1);
  });
});
