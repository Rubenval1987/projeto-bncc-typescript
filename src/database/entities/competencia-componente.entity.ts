import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CompetenciaComponente {
  @PrimaryGeneratedColumn()
  id_competencia: number;

  @Column()
  descricao: string;

  @Column()
  id_curso: number;

  @Column()
  id_componente: number;

  @Column()
  id_areaconhecimento: number;

  @Column()
  id_etapa: number;
}
