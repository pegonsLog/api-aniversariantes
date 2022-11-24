import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Birthday {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  name: string;

  @Column({
    length: 2,
  })
  day: string;

  @Column({
    length: 3,
  })
  month: string;
}
