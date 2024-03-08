import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CompetenciaArea {
  @PrimaryGeneratedColumn()
  id_competencia: number;

  @Column()
  descricao: string;

  @Column()
  id_areaconhecimento: number;

  @Column()
  id_etapa: number;
}
