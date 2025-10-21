import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TrackingService } from './tracking.service';
import { CreateTrackingDto } from './dto/create-tracking.dto';
import { UpdateTrackingDto } from './dto/update-tracking.dto';

@Controller('tracking')
export class TrackingController {
  constructor(private readonly trackingService: TrackingService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTrackingDto: CreateTrackingDto) {
    return this.trackingService.create(createTrackingDto);
  }

  @Get()
  findAll() {
    return this.trackingService.findAll();
  }

  @Get(':trackingNumber')
  findOne(@Param('trackingNumber') trackingNumber: string) {
    return this.trackingService.findByTrackingNumber(trackingNumber);
  }

  @Put(':trackingNumber')
  update(
    @Param('trackingNumber') trackingNumber: string,
    @Body() updateTrackingDto: UpdateTrackingDto,
  ) {
    return this.trackingService.update(trackingNumber, updateTrackingDto);
  }

  @Delete(':trackingNumber')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('trackingNumber') trackingNumber: string) {
    return this.trackingService.delete(trackingNumber);
  }
}

