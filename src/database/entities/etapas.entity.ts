import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Etapas {
  @PrimaryGeneratedColumn()
  id_etapa: number;

  @Column()
  nome: string;
}
