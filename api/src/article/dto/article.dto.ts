import { ApiProperty } from '@nestjs/swagger';

export class ArticleDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    author: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    content: string;
}