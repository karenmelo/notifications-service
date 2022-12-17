import { SendNotificaton } from '../use-cases/send-notification';
describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotificaton = new SendNotificaton();

    const { notification } = await sendNotificaton.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
