import { PrismaNotificationsRepository } from './repositories/prisma-notifications-repository';
import { NotificationsRepository } from 'src/application/repositories/notifications-reporistory';
import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';
@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
