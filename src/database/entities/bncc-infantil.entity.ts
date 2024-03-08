import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BnccInfantil {
  @PrimaryGeneratedColumn()
  id_bncc: number;

  @Column()
  faixa: string;

  @Column()
  objetivo_aprendizagem: string;

  @Column()
  id_campoexperiencia: number;

  @Column()
  id_etapa: number;
}
