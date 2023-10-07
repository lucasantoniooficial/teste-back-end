import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {PrismaService} from "../prisma/prisma.service";


@Injectable()
export class CategoryService {
  constructor(
      private prisma: PrismaService
  ) {
  }
  async create(createCategoryDto: CreateCategoryDto): Promise<any> {
      return this.prisma.category.create({data: createCategoryDto});

  }

  async findAll() {
    return this.prisma.category.findMany();
  }

  async findOne(id: number) {
    return this.prisma.category.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    await this.prisma.category.update({
      where: {
        id
      },
      data: updateCategoryDto
    });

    return this.prisma.category.findUnique({
      where: {
        id
      }
    })
  }

  async remove(id: number): Promise<void> {
    await this.prisma.category.delete({
      where: {
        id
      }
    });
  }
}
