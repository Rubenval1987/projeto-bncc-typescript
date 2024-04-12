import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreaConhecimentosModule } from './area-conhecimentos/area-conhecimentos.module';
import { ComponentesModule } from './componentes/componentes.module';
import { CursosModule } from './cursos/cursos.module';
import { EtapasModule } from './etapas/etapas.module';
import { CamposExperienciaModule } from './campos-experiencia/campos-experiencia.module';
import { DireitosAprendizagemModule } from './direitos-aprendizagem/direitos-aprendizagem.module';
import { CompetenciaGeralModule } from './competencia-geral/competencia-geral.module';
import { CompetenciaComponenteModule } from './competencia-componente/competencia-componente.module';
import { CompetenciaAreaModule } from './competencia-area/competencia-area.module';
import { BnccFundamentalModule } from './bncc-fundamental/bncc-fundamental.module';
import { BnccInfantilModule } from './bncc-infantil/bncc-infantil.module';
import { BnccMedioModule } from './bncc-medio/bncc-medio.module';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [`${__dirname}/database/entities/{.ts,*.js}`],
      synchronize: false,
      migrations: [`${__dirname}/database/migrations/{.ts,*.js}`],
      migrationsRun: true,
    }),
    DatabaseModule,
    AreaConhecimentosModule,
    ComponentesModule,
    CursosModule,
    EtapasModule,
    CamposExperienciaModule,
    DireitosAprendizagemModule,
    CompetenciaGeralModule,
    CompetenciaComponenteModule,
    CompetenciaAreaModule,
    BnccFundamentalModule,
    BnccInfantilModule,
    BnccMedioModule,
    AuthModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
