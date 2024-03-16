import { DataSource } from 'typeorm';
import { AreaConhecimentos } from './entities/area-conhecimentos.entity';
import { CamposExperiencia } from './entities/campos-experiencia.entity';
import { CompetenciaArea } from './entities/competencia-area.entity';
import { CompetenciaComponente } from './entities/competencia-componente.entity';
import { CompetenciaGeral } from './entities/competencia-geral.entity';
import { Componentes } from './entities/componentes.entity';
import { Cursos } from './entities/cursos.entity';
import { DireitosAprendizagem } from './entities/direitos-aprendizagem.entity';
import { Etapas } from './entities/etapas.entity';
import { BnccMedio } from './entities/bncc-medio.entity';
import { BnccInfantil } from './entities/bncc-infantil.entity';
import { BnccFundamental } from './entities/bncc-fundamental.entity';
import { Usuarios } from './entities/usuarios.entity';

export const Providers = [
  {
    provide: 'AREA_CONHECIMENTOS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AreaConhecimentos),
    inject: ['DATA_SOURCE'],
  },

  {
    provide: 'BNCC_FUNDAMENTAL_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(BnccFundamental),
    inject: ['DATA_SOURCE'],
  },

  {
    provide: 'BNCC_INFANTIL_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(BnccInfantil),
    inject: ['DATA_SOURCE'],
  },

  {
    provide: 'BNCC_MEDIO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(BnccMedio),
    inject: ['DATA_SOURCE'],
  },

  {
    provide: 'CAMPOS_EXPERIENCIA_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CamposExperiencia),
    inject: ['DATA_SOURCE'],
  },

  {
    provide: 'COMPETENCIA_AREA_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CompetenciaArea),
    inject: ['DATA_SOURCE'],
  },

  {
    provide: 'COMPETENCIA_COMPONENTE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CompetenciaComponente),
    inject: ['DATA_SOURCE'],
  },

  {
    provide: 'COMPETENCIA_GERAL_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CompetenciaGeral),
    inject: ['DATA_SOURCE'],
  },

  {
    provide: 'COMPONENTES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Componentes),
    inject: ['DATA_SOURCE'],
  },

  {
    provide: 'CURSOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Cursos),
    inject: ['DATA_SOURCE'],
  },

  {
    provide: 'DIREITOS_APRENDIZAGEM_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(DireitosAprendizagem),
    inject: ['DATA_SOURCE'],
  },

  {
    provide: 'ETAPAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Etapas),
    inject: ['DATA_SOURCE'],
  },

  {
    provide: 'USUARIOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Usuarios),
    inject: ['DATA_SOURCE'],
  },
];
