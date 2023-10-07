import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CategoryModule} from './category/category.module';
import {ProductModule} from './product/product.module';
import {ImageModule} from './image/image.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path";
import {PrismaService} from "./prisma/prisma.service";
import {PrismaModule} from "./prisma/prisma.module";

@Module({
  imports: [
      ServeStaticModule.forRoot({
          rootPath: path.join(__dirname, '..', 'upload')
      }),
      PrismaModule,
      CategoryModule,
      ProductModule,
      ImageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
