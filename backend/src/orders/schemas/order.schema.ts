import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

export enum OrderStatus {
  PENDING = 'PENDING',
  IN_TRANSIT = 'IN_TRANSIT',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true, unique: true })
  orderNumber: string;

  @Prop({ required: true })
  trackingNumber: string;

  @Prop({ required: true })
  customerName: string;

  @Prop({ required: true })
  customerEmail: string;

  @Prop({ required: true })
  origin: string;

  @Prop({ required: true })
  destination: string;

  @Prop({ 
    type: String, 
    enum: OrderStatus,
    default: OrderStatus.PENDING 
  })
  status: OrderStatus;

  @Prop({ type: [{ name: String, quantity: Number, price: Number }] })
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;

  @Prop({ required: true })
  totalAmount: number;

  @Prop()
  orderDate: Date;

  @Prop()
  deliveryDate?: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
