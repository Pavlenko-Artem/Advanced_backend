import { ApiProperty } from '@nestjs/swagger/dist';

export class CreateUserDto {
  @ApiProperty({ example: 'user@email.com', description: 'Почтовый адрес' })
  readonly email: string;
  @ApiProperty({ example: '12345678', description: 'Пароль' })
  readonly password: string;
}
