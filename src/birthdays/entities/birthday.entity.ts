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
    length: 15,
  })
  birthday: string;
}
