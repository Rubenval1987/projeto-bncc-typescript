import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CompetenciaGeral {
  @PrimaryGeneratedColumn()
  id_competencia: number;

  @Column()
  descricao: string;

  @Column()
  id_etapa: number;
}
