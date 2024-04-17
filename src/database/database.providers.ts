import { DataSource } from 'typeorm';
import { AreaConhecimentos } from './entities/area-conhecimentos.entity';
import { BnccFundamental } from './entities/bncc-fundamental.entity';
import { BnccInfantil } from './entities/bncc-infantil.entity';
import { BnccMedio } from './entities/bncc-medio.entity';
import { CamposExperiencia } from './entities/campos-experiencia.entity';
import { CompetenciaArea } from './entities/competencia-area.entity';
import { CompetenciaComponente } from './entities/competencia-componente.entity';
import { CompetenciaGeral } from './entities/competencia-geral.entity';
import { Componentes } from './entities/componentes.entity';
import { Cursos } from './entities/cursos.entity';
import { DireitosAprendizagem } from './entities/direitos-aprendizagem.entity';
import { Etapas } from './entities/etapas.entity';
import { Usuarios } from './entities/usuarios.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [
          AreaConhecimentos,
          BnccFundamental,
          BnccInfantil,
          BnccMedio,
          CamposExperiencia,
          CompetenciaArea,
          CompetenciaComponente,
          CompetenciaGeral,
          Componentes,
          Cursos,
          DireitosAprendizagem,
          Etapas,
          Usuarios,
        ],
        synchronize: false,
        migrations: [`${__dirname}/database/migrations/{.ts,*.js}`],
        migrationsRun: true,
      });

      return dataSource.initialize();
    },
  },
];
