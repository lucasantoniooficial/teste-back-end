import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  HttpCode, Res, Response
} from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import {FilesInterceptor} from "@nestjs/platform-express";
import MulterConfig from "./multer-config";

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files', 10, MulterConfig))
  @HttpCode(201)
  create(
      @Body() createImageDto: CreateImageDto,
      @UploadedFiles() files: Express.Multer.File[],
      @Response() res
  ) {
    this.imageService.create({productId: Number(createImageDto.productId)}, files);

    return res.status(201).json('Image created successfully')
  }

  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imageService.update(+id, updateImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.remove(+id);
  }
}
