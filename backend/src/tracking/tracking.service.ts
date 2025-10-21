import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tracking, TrackingDocument } from './schemas/tracking.schema';
import { CreateTrackingDto } from './dto/create-tracking.dto';
import { UpdateTrackingDto } from './dto/update-tracking.dto';

@Injectable()
export class TrackingService {
  constructor(
    @InjectModel(Tracking.name)
    private trackingModel: Model<TrackingDocument>,
  ) {}

  async create(createTrackingDto: CreateTrackingDto): Promise<Tracking> {
    const newTracking = new this.trackingModel(createTrackingDto);
    return newTracking.save();
  }

  async findAll(): Promise<Tracking[]> {
    return this.trackingModel.find().exec();
  }

  async findByTrackingNumber(trackingNumber: string): Promise<Tracking> {
    // Validate input is a string
    if (typeof trackingNumber !== 'string' || !trackingNumber.trim()) {
      throw new NotFoundException('Invalid tracking number format');
    }
    
    const tracking = await this.trackingModel
      .findOne({ trackingNumber: trackingNumber.trim() })
      .exec();
    
    if (!tracking) {
      throw new NotFoundException(
        `Tracking with number ${trackingNumber} not found`,
      );
    }
    
    return tracking;
  }

  async update(
    trackingNumber: string,
    updateTrackingDto: UpdateTrackingDto,
  ): Promise<Tracking> {
    // Validate input is a string
    if (typeof trackingNumber !== 'string' || !trackingNumber.trim()) {
      throw new NotFoundException('Invalid tracking number format');
    }
    
    const tracking = await this.trackingModel
      .findOneAndUpdate(
        { trackingNumber: trackingNumber.trim() }, 
        updateTrackingDto, 
        { new: true }
      )
      .exec();
    
    if (!tracking) {
      throw new NotFoundException(
        `Tracking with number ${trackingNumber} not found`,
      );
    }
    
    return tracking;
  }

  async delete(trackingNumber: string): Promise<void> {
    // Validate input is a string
    if (typeof trackingNumber !== 'string' || !trackingNumber.trim()) {
      throw new NotFoundException('Invalid tracking number format');
    }
    
    const result = await this.trackingModel
      .deleteOne({ trackingNumber: trackingNumber.trim() })
      .exec();
    
    if (result.deletedCount === 0) {
      throw new NotFoundException(
        `Tracking with number ${trackingNumber} not found`,
      );
    }
  }
}

