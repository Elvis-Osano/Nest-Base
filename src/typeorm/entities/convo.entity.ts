import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Message from './messages.entity';

@Entity({ name: 'conversations' })
export default class Conversation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => Message, (msg) => msg.sender_id, { onDelete: 'CASCADE' })
  sender_id: number;
  @OneToOne(() => Message, (msg) => msg.receiver_id, { onDelete: 'CASCADE' })
  receiver_id: number;
  @OneToOne(() => Message, (msg) => msg.message, { onDelete: 'CASCADE' })
  last_message_id: number;
}
