import { IsEnum, IsOptional, IsDateString } from 'class-validator';
import { TrackingStatus } from '../schemas/tracking.schema';

export class UpdateTrackingDto {
  @IsEnum(TrackingStatus)
  @IsOptional()
  status?: TrackingStatus;

  @IsDateString()
  @IsOptional()
  estimatedDelivery?: string;

  @IsDateString()
  @IsOptional()
  actualDelivery?: string;
}
