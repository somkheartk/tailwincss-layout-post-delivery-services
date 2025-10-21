import { IsString, IsNotEmpty, IsEmail, IsArray, IsNumber, IsOptional, IsDateString, IsEnum } from 'class-validator';
import { OrderStatus } from '../schemas/order.schema';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  orderNumber: string;

  @IsString()
  @IsNotEmpty()
  trackingNumber: string;

  @IsString()
  @IsNotEmpty()
  customerName: string;

  @IsEmail()
  @IsNotEmpty()
  customerEmail: string;

  @IsString()
  @IsNotEmpty()
  origin: string;

  @IsString()
  @IsNotEmpty()
  destination: string;

  @IsEnum(OrderStatus)
  @IsOptional()
  status?: OrderStatus;

  @IsArray()
  @IsOptional()
  items?: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;

  @IsNumber()
  @IsNotEmpty()
  totalAmount: number;

  @IsDateString()
  @IsOptional()
  orderDate?: string;
}
