import { NotificationsRepository } from 'src/application/repositories/notifications-reporistory';
import { Notification } from 'src/application/entities/notification';

//database in memory for tests
export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
