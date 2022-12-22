import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['fancy-tahr-14935-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZmFuY3ktdGFoci0xNDkzNSQQlKxUuZ6m5Q0UVwE8aXhaNldu9nXhdVUh743rd0k',
          password: 'd9ce6a3c2d144d50a1d5b057bd717895',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
