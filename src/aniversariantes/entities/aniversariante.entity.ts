import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aniversariante {
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
