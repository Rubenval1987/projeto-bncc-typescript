import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cursos {
  @PrimaryGeneratedColumn()
  id_curso: number;

  @Column()
  nome: string;

  @Column()
  codigo_censo: string;

  @Column()
  idade_regular: string;

  @Column()
  acronimo: string;

  @Column()
  tem_retencao: number;
}
