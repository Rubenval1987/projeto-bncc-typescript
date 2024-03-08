import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BnccFundamental {
  @PrimaryGeneratedColumn()
  id_bncc: number;

  @Column()
  campo_atuacao: string;

  @Column()
  pratica_linguagem: string;

  @Column()
  unidade_tematica: string;

  @Column()
  objeto_conhecimento: string;

  @Column()
  habilidade: string;

  @Column()
  id_curso: number;

  @Column()
  id_componente: number;

  @Column()
  id_areaconhecimento: number;

  @Column()
  id_etapa: number;
}
