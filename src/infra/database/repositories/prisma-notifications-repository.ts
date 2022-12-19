import { PrismaNotificationMapper } from './../mappers/prisma-notification-mapper';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-reporistory';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notificaton.create({
      data: raw,
    });
  }

  async findById(notificationId: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }

  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
