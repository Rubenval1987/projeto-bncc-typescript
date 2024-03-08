import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Componentes {
  @PrimaryGeneratedColumn()
  id_componente: number;

  @Column()
  nome: string;

  @Column()
  id_curso: number;

  @Column()
  id_areaconhecimento: number;

  @Column()
  id_etapa: number;
}
