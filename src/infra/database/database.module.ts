import { PrismaNotificationsRepository } from '@infra/database/prisma/repositories/prisma-notifications-repository';
import { NotificationsRepository } from '@application/repositories/notifications-reporistory';
import { PrismaService } from '@infra/database/prisma/prisma.service';
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
