import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserProfileDto {
  @ApiProperty({
    description: 'The unique identifier of the user profile (UUID format)',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  id?: string;

  @ApiProperty({
    description: 'The first name of the user',
    required: false,
  })
  @IsString()
  @MaxLength(50)
  @IsOptional()
  firstName?: string;

  @ApiProperty({
    description: 'The last name of the user',
    required: false,
  })
  @IsString()
  @MaxLength(50)
  @IsOptional()
  lastName?: string;

  @ApiProperty({
    description: 'The phone number of the user',
    required: false,
  })
  @IsString()
  @MaxLength(20)
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: 'The address of the user',
    required: false,
  })
  @IsString()
  @MaxLength(100)
  @IsOptional()
  address?: string;

  @ApiProperty({
    description: 'The bio (short description) of the user',
    required: false,
  })
  @IsString()
  @MaxLength(300)
  @IsOptional()
  bio?: string;

  @ApiProperty({
    description: 'The unique identifier of the user (UUID format)',
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  userId: string;
}
