import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name)
    private orderModel: Model<OrderDocument>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const newOrder = new this.orderModel(createOrderDto);
    return newOrder.save();
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async findByOrderNumber(orderNumber: string): Promise<Order> {
    const order = await this.orderModel.findOne({ orderNumber }).exec();
    
    if (!order) {
      throw new NotFoundException(`Order with number ${orderNumber} not found`);
    }
    
    return order;
  }

  async findByCustomerEmail(email: string): Promise<Order[]> {
    return this.orderModel.find({ customerEmail: email }).exec();
  }

  async update(
    orderNumber: string,
    updateOrderDto: UpdateOrderDto,
  ): Promise<Order> {
    const order = await this.orderModel
      .findOneAndUpdate({ orderNumber }, updateOrderDto, { new: true })
      .exec();
    
    if (!order) {
      throw new NotFoundException(`Order with number ${orderNumber} not found`);
    }
    
    return order;
  }

  async delete(orderNumber: string): Promise<void> {
    const result = await this.orderModel.deleteOne({ orderNumber }).exec();
    
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Order with number ${orderNumber} not found`);
    }
  }
}

