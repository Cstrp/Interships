import { UserProfileDto } from './user-profile.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class UserDto {
  @ApiProperty({
    description: 'The unique identifier of the user (UUID format)',
    nullable: false,
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  id?: string;

  @ApiProperty({
    description: 'The email address of the user',
    nullable: false,
    required: true,
  })
  @IsEmail()
  @IsString()
  @IsDefined()
  email: string;

  @ApiProperty({
    description:
      'The password of the user (must be between 6 and 16 characters)',
    nullable: false,
    required: true,
  })
  @IsString()
  @IsDefined()
  @MinLength(6)
  @MaxLength(16)
  password: string;

  @ApiProperty({
    description: 'The profile information of the user',
    required: false,
  })
  @ValidateNested({ each: true })
  profile?: UserProfileDto;

  @ApiProperty({
    description: 'The date and time when the user was created',
    nullable: false,
    required: false,
    default: new Date(),
  })
  createdAt?: Date;

  @ApiProperty({
    description: 'The date and time when the user was last updated',
    nullable: false,
    required: false,
    default: new Date(),
  })
  updatedAt?: Date;
}
