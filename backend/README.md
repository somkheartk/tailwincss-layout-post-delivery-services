# Fast Express API

NestJS backend API for Fast Express delivery tracking and order management system.

## Features

- **Tracking API**: Create, read, update, and delete tracking information
- **Orders API**: Manage customer orders with full CRUD operations
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **Validation**: Request validation using class-validator
- **CORS Enabled**: Ready for frontend integration

## Tech Stack

- **Framework**: NestJS
- **Database**: MongoDB with Mongoose
- **Validation**: class-validator, class-transformer
- **Configuration**: @nestjs/config with .env support

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally or remote connection)

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file in the backend directory:

```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/fastexpress
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## API Endpoints

### Tracking API

- `GET /api/tracking` - Get all tracking records
- `GET /api/tracking/:trackingNumber` - Get tracking by number
- `POST /api/tracking` - Create new tracking record
- `PUT /api/tracking/:trackingNumber` - Update tracking record
- `DELETE /api/tracking/:trackingNumber` - Delete tracking record

### Orders API

- `GET /api/orders` - Get all orders (optional ?email=xxx filter)
- `GET /api/orders/:orderNumber` - Get order by number
- `POST /api/orders` - Create new order
- `PUT /api/orders/:orderNumber` - Update order
- `DELETE /api/orders/:orderNumber` - Delete order

## Data Models

### Tracking

```typescript
{
  trackingNumber: string;
  sender: string;
  recipient: string;
  origin: string;
  destination: string;
  status: 'ORDER_PLACED' | 'PICKED_UP' | 'IN_TRANSIT' | 'OUT_FOR_DELIVERY' | 'DELIVERED';
  statusHistory: Array<{ status: string; timestamp: Date; location: string }>;
  estimatedDelivery: Date;
  actualDelivery?: Date;
  weight: number;
  dimensions: string;
}
```

### Order

```typescript
{
  orderNumber: string;
  trackingNumber: string;
  customerName: string;
  customerEmail: string;
  origin: string;
  destination: string;
  status: 'PENDING' | 'IN_TRANSIT' | 'DELIVERED' | 'CANCELLED';
  items: Array<{ name: string; quantity: number; price: number }>;
  totalAmount: number;
  orderDate: Date;
  deliveryDate?: Date;
}
```

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## License

ISC
