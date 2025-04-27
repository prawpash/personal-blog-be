import { EnvService } from '@infra/env/env.service';
import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { parse } from 'file-type-mime';

@Injectable()
export class CustomFileValidationPipe implements PipeTransform {
  constructor(private readonly configService: EnvService) {}

  transform(value: Express.Multer.File) {
    if (!value) {
      throw new BadRequestException('File is required');
    }

    //validating file size
    const maxFileSize = this.configService.get('UPLOAD_MAX_FILE_SIZE');

    if (value.size > maxFileSize) {
      throw new BadRequestException(
        `File size must be less than ${maxFileSize} bytes`,
      );
    }

    //validating file type

    const fileType = this.configService.get('UPLOAD_FILE_TYPE');

    const buffer = value.buffer;

    const mimeType = parse(buffer);

    if (!mimeType) {
      throw new BadRequestException(
        `File must be one of the following types: ${fileType.join(',')}`,
      );
    }

    const isValidType = fileType.includes(mimeType.mime);

    if (!isValidType) {
      throw new BadRequestException(
        `File must be one of the following types: ${fileType.join(',')}`,
      );
    }

    return value;
  }
}
