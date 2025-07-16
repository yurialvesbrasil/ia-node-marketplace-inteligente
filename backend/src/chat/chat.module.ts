import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { PostgresService } from '../shared/postgres.service';
import { ChatService } from './chat.service';
import { LlmModule } from '../shared/llm/llm.module';

@Module({
  imports: [LlmModule],
  controllers: [ChatController],
  providers: [PostgresService, ChatService],
})
export class ChatModule {}
