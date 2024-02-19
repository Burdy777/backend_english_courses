import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Quizz {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'text', nullable: false })
  name!: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  date?: string;

  @Column({ type: 'text', nullable: false })
  question!: string;

  @Column({ type: 'text', nullable: false })
  propositions!: string;

  @Column({ type: 'text', nullable: false })
  answer!: string;

}
