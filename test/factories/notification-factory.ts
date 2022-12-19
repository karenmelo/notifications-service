import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { Content } from '@application/ValueObjects/content';

type Override = Partial<NotificationProps>;

//utilizacao do Factory Pattern para criacao do objeto notification de forma mais simples.
//Evita que o codigo fique verboso em diversos pontos que seja necessaria a criacao do objeto
export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('This is a notification'),
    category: 'social',
    recipientId: 'recipient-1',
    ...override,
  });
}
