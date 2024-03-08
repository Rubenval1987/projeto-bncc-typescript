import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BnccMedio {
  @PrimaryGeneratedColumn()
  id_bncc: number;

  @Column()
  codigo_habilidade: string;

  @Column()
  habilidade: string;

  @Column()
  id_curso: number;

  @Column()
  id_areaconhecimento: number;

  @Column()
  id_etapa: number;
}
