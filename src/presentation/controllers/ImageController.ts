import {
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { IdValidationDTO } from './dtos/IdValidationDTO';
import { FileInterceptor } from '@nestjs/platform-express';
import { CustomValidationPipe } from '@infra/validators/CustomValidationPipe';
import { Logger } from '@core/application/services/Logger';
import { InjectionToken } from '@infra/config/injectionToken.config';

@Controller('images')
export class ImageController {
  constructor(
    @Inject(InjectionToken.LOGGER)
    private readonly logger: Logger,
  ) {}

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
