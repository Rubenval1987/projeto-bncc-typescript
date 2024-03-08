import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CamposExperiencia {
  @PrimaryGeneratedColumn()
  id_campoexperiencia: number;

  @Column()
  nome: string;

  @Column()
  id_etapa: number;
}
