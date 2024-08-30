import { PrismaClient } from '@prisma/client';
import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';

export class DatabaseService
  extends PrismaClient
  implements OnModuleDestroy, OnModuleInit
{
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
