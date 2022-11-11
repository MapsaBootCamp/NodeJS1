import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  NotAcceptableException,
} from '@nestjs/common';

@Injectable()
export class ExampleParsePipeInt implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const result = +value;
    if (!result) {
      throw new NotAcceptableException();
    }
    return result;
  }
}
