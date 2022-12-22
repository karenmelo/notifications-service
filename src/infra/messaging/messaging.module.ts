import { NotificationsController } from './kafka/controllers/notifications.controllers';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [KafkaConsumerService],
  controllers: [NotificationsController],
})
export class MessagingModule {}
