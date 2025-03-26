import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { LoggerService } from '@infra/logging/LoggerService';
import { IdValidationDTO } from './dtos/IdValidationDTO';
import { FileInterceptor } from '@nestjs/platform-express';
import { CustomValidationPipe } from '@infra/validators/CustomValidationPipe';

@Controller('images')
export class ImageController {
  constructor(private readonly logger: LoggerService) {
    this.logger.setContext(ImageController.name);
  }

  @Get(':fileName')
  getImageByFileName(@Param('fileName') fileName: string) {
    return `Get image by fileName: ${fileName}`;
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(
    @UploadedFile(CustomValidationPipe)
    file: Express.Multer.File,
  ) {
    this.logger.debug(file);

    return 'Upload Image';
  }

  @Delete(':id')
  deleteImage(@Param() params: IdValidationDTO) {
    const { id } = params;

    return `Delete image by id: ${id}`;
  }
}
