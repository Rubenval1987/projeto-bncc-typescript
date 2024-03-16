import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  usuario: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  token: string;
}
