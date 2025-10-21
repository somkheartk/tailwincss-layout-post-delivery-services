import { IsString, IsNotEmpty, IsEnum, IsOptional, IsNumber, IsDateString } from 'class-validator';
import { TrackingStatus } from '../schemas/tracking.schema';

export class CreateTrackingDto {
  @IsString()
  @IsNotEmpty()
  trackingNumber: string;

  @IsString()
  @IsNotEmpty()
  sender: string;

  @IsString()
  @IsNotEmpty()
  recipient: string;

  @IsString()
  @IsNotEmpty()
  origin: string;

  @IsString()
  @IsNotEmpty()
  destination: string;

  @IsEnum(TrackingStatus)
  @IsOptional()
  status?: TrackingStatus;

  @IsDateString()
  @IsOptional()
  estimatedDelivery?: string;

  @IsNumber()
  @IsOptional()
  weight?: number;

  @IsString()
  @IsOptional()
  dimensions?: string;
}
