import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DireitosAprendizagem {
  @PrimaryGeneratedColumn()
  id_direitoaprendizagem: number;

  @Column()
  nome: string;

  @Column()
  id_etapa: number;
}
