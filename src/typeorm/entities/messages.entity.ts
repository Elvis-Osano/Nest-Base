import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './users.entity';

@Entity({ name: 'messages' })
export default class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.id)
  sender_id: User;
  @ManyToOne(() => User, (user) => user.id)
  receiver_id: User;
  @Column({ type: 'varchar', length: 200 })
  message: string;
  @CreateDateColumn()
  time_sent: Date;
}
