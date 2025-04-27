import {
  isNotEmpty,
  isString,
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export default function IsNotEmptyString(
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isNotEmptyString',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return isString(value) && isNotEmpty(value.trim());
        },
        defaultMessage(args: ValidationArguments) {
          return `The ${args.property} should not be an empty string`;
        },
      },
    });
  };
}
