import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AreaConhecimentos {
  @PrimaryGeneratedColumn()
  id_areaconhecimento: number;

  @Column()
  nome: string;

  @Column()
  id_etapa: number;
}
