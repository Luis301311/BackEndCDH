import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateProduct {
  @ApiProperty({ description: 'The unique identifier for the product', example: '12345' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'The code of the product', example: 'ABC123' })
  @IsString()
  code: string;

  @ApiProperty({ description: 'The name of the product', example: 'Sample Product' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'The type of the product', example: 'Electronics' })
  @IsString()
  type: string;

  @ApiProperty({ description: 'Whether the product has stock control', example: true })
  @IsBoolean()
  stock_control: boolean;

  @ApiProperty({ description: 'Whether the product is active', example: true })
  @IsBoolean()
  active: boolean;

  @ApiProperty({ description: 'The tax classification of the product', example: 'Standard' })
  @IsString()
  tax_classification: string;

  @ApiProperty({ description: 'Whether taxes are included in the price', example: false })
  @IsBoolean()
  taxes_included: boolean;

  @ApiProperty({ description: 'The value of the consumption tax', example: 19.99 })
  @IsNumber()
  consumption_tax_value: number;

  @ApiProperty({ description: 'The label for the unit of measurement', example: 'Unit' })
  @IsString()
  unit_label: string;

  @ApiProperty({ description: 'The reference of the product', example: 'REF123456' })
  @IsString()
  reference: string;

  @ApiProperty({ description: 'The barcode of the product', example: '1234567890123' })
  @IsString()
  barcode: string;

  @ApiProperty({ description: 'The brand of the product', example: 'BrandName' })
  @IsString()
  brand: string;

  @ApiProperty({ description: 'The tariff code of the product', example: '100' })
  @IsString()
  tariff: string;

  @ApiProperty({ description: 'The model of the product', example: 'ModelX' })
  @IsString()
  model: string;

  @ApiProperty({ description: 'The creation date of the product', example: '2024-08-05T15:30:00Z' })
  @IsString()  // ISO 8601 string representation
  created: string;

  @ApiProperty({ description: 'The group ID the product belongs to', example: 1 })
  @IsNumber()
  groupId: number;

  @ApiProperty({ description: 'The unit code of the product', example: 'UC123' })
  @IsString()
  unitCode: string;
}
