import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import ResponseProductsProps from "./types/response-products-props";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({data: createProductDto})
  }

  async findAll(search: string = '', categoryId: number = 0, limit: number) {
    let where = {
        name: {
          contains: search
        }
    }

    if(categoryId) {
      where['categoryId'] = categoryId
    }

    const products = await this.prisma.product.findMany({
      where,
      take: limit,
      include: {
        category: true,
        images: true
      }
    })
    const count = await this.prisma.product.count();
    return  {
      data: products,
      count
    };
  }

  async findOne(id: number) {
    return this.prisma.product.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.prisma.product.update({
      where: {
        id
      },
      data: updateProductDto
    });
    return this.prisma.product.findUnique({
      where: {
        id
      }
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.product.delete({
      where: {
        id
      }
    });
  }
}
