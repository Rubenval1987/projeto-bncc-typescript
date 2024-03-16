import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { Usuarios } from './../database/entities/usuarios.entity';
import { CreateUsuariosDto } from './dto/create.usuarios.dto';
import { UpdateUsuariosDto } from './dto/update.usuarios.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject('USUARIOS_REPOSITORY')
    private usuariosRepository: Repository<Usuarios>,
  ) {}

  async create(createUsuariosDto: CreateUsuariosDto) {
    const usuarios = this.usuariosRepository.create(createUsuariosDto);
    return this.usuariosRepository.save(usuarios);
  }

  async findAll() {
    return this.usuariosRepository.find();
  }

  async findOne(id_usuario: any) {
    const usuarios = this.usuariosRepository.findOne(id_usuario);
    if (!usuarios) {
      throw new Error('Nenhum usuário foi encontrado com esse índice!');
    }
    return usuarios;
  }

  async update(id_usuario: any, updateUsuariosDto: UpdateUsuariosDto) {
    return this.usuariosRepository.update(id_usuario, updateUsuariosDto);
  }

  async delete(id_usuario: any) {
    const usuarios = this.usuariosRepository.find(id_usuario);
    if (!usuarios) {
      throw new Error('Nenhum usuário foi encontrado com esse índice!');
    }
    return this.usuariosRepository.delete(id_usuario);
  }
}
