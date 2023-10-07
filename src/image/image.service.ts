import {Injectable} from '@nestjs/common';
import {CreateImageDto} from './dto/create-image.dto';
import {UpdateImageDto} from './dto/update-image.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class ImageService {

  constructor(private prisma: PrismaService) {}
  create(createImageDto: CreateImageDto, files: Express.Multer.File[]) {
    return files.map(async (file: Express.Multer.File) => {
      return this.prisma.image.create({
        data: {
          productId: createImageDto.productId,
          path: `/files/${file.filename}`
        }
      });
    })
  }

  async findAll() {
    return this.prisma.image.findMany();
  }

  async findOne(id: number) {
    return this.prisma.image.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateImageDto: UpdateImageDto) {
    await this.prisma.image.update({
      where: {
        id
      },
      data: updateImageDto
    });
    return this.prisma.image.findUnique({
      where: {
        id
      }
    });
  }

  async remove(id: number) {
    await this.prisma.image.delete({
      where: {
        id
      }
    });
  }
}
