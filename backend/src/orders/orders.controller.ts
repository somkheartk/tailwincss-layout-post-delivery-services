import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll(@Query('email') email?: string) {
    if (email) {
      return this.ordersService.findByCustomerEmail(email);
    }
    return this.ordersService.findAll();
  }

  @Get(':orderNumber')
  findOne(@Param('orderNumber') orderNumber: string) {
    return this.ordersService.findByOrderNumber(orderNumber);
  }

  @Put(':orderNumber')
  update(
    @Param('orderNumber') orderNumber: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.ordersService.update(orderNumber, updateOrderDto);
  }

  @Delete(':orderNumber')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('orderNumber') orderNumber: string) {
    return this.ordersService.delete(orderNumber);
  }
}

