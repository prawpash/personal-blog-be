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
import { FileInterceptor } from '@nestjs/platform-express';
import { CustomFileValidationPipe } from '@infra/validators/CustomFileValidationPipe';
import { Logger } from '@core/application/services/Logger';
import { InjectionToken } from '@infra/config/injectionToken.config';
import { IdValidationDTO } from '@presentation/dtos/IdValidationDTO';

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
    @UploadedFile(CustomFileValidationPipe)
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
