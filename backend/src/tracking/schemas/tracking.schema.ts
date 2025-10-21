import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrackingDocument = Tracking & Document;

export enum TrackingStatus {
  ORDER_PLACED = 'ORDER_PLACED',
  PICKED_UP = 'PICKED_UP',
  IN_TRANSIT = 'IN_TRANSIT',
  OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
  DELIVERED = 'DELIVERED',
}

@Schema({ timestamps: true })
export class Tracking {
  @Prop({ required: true, unique: true })
  trackingNumber: string;

  @Prop({ required: true })
  sender: string;

  @Prop({ required: true })
  recipient: string;

  @Prop({ required: true })
  origin: string;

  @Prop({ required: true })
  destination: string;

  @Prop({ 
    type: String, 
    enum: TrackingStatus,
    default: TrackingStatus.ORDER_PLACED 
  })
  status: TrackingStatus;

  @Prop({ type: [{ status: String, timestamp: Date, location: String }] })
  statusHistory: Array<{
    status: string;
    timestamp: Date;
    location: string;
  }>;

  @Prop()
  estimatedDelivery: Date;

  @Prop()
  actualDelivery?: Date;

  @Prop()
  weight: number;

  @Prop()
  dimensions: string;
}

export const TrackingSchema = SchemaFactory.createForClass(Tracking);
