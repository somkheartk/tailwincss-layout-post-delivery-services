# Fast Express - Post Delivery Services

A modern, responsive post delivery tracking and management system built with Next.js, Tailwind CSS, Material-UI, and NestJS backend with MongoDB. Inspired by Fast Express Thailand's delivery service interface.

## 🚀 Features

### Shipment Tracking
- **Real-time Tracking Search**: Enter tracking number to get instant shipment updates
- **Visual Progress Stepper**: Clear visualization of delivery stages
  - Order Placed
  - Picked Up
  - In Transit
  - Out for Delivery
  - Delivered
- **Status Badges**: Color-coded status indicators
- **Estimated Delivery**: Display expected delivery date

### Order Management
- **Order List View**: Browse all your orders in one place
- **Detailed Information**: View date, route, items, and amount for each order
- **Status Filtering**: Easy identification of in-transit vs delivered orders
- **Quick Actions**: View details and download invoice buttons
- **Responsive Grid Layout**: Optimized for all screen sizes

### Design & UX
- **Flash Express Branding**: Orange (#FF6600) color scheme
- **Responsive Design**: Mobile-first approach, works on all devices
- **Modern UI Components**: Material-UI components with Tailwind CSS styling
- **Tab Navigation**: Seamless switching between tracking and orders
- **Professional Footer**: Contact info, services, and social links

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.5.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with @tailwindcss/postcss
- **UI Components**: Material-UI (MUI) v7
- **Icons**: MUI Icons
- **Runtime**: Node.js

### Backend
- **Framework**: NestJS
- **Database**: MongoDB with Mongoose ODM
- **Validation**: class-validator, class-transformer
- **Configuration**: @nestjs/config with .env support

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/somkheartk/tailwincss-layout-post-delivery-services.git
   cd tailwincss-layout-post-delivery-services
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Configure backend environment**
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/fastexpress
   ```

5. **Run development servers**
   
   Frontend:
   ```bash
   npm run dev
   ```
   
   Backend (in a separate terminal):
   ```bash
   cd backend
   npm run start:dev
   ```

6. **Open in browser**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:3001/api](http://localhost:3001/api)

## 🏗️ Build & Deploy

### Build Frontend
```bash
npm run build
```

### Start Frontend Production Server
```bash
npm start
```

### Build Backend
```bash
cd backend
npm run build
```

### Start Backend Production Server
```bash
cd backend
npm run start:prod
```

### Lint Code
```bash
npm run lint
```

## 📁 Project Structure

```
├── app/                     # Next.js app directory
│   ├── layout.tsx          # Root layout with MUI theme provider
│   ├── page.tsx            # Main page with tab navigation
│   └── globals.css         # Global styles and Tailwind imports
├── backend/                 # NestJS backend API
│   ├── src/
│   │   ├── tracking/       # Tracking module
│   │   ├── orders/         # Orders module
│   │   └── main.ts         # Application entry point
│   └── README.md           # Backend documentation
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── TrackingSection.tsx # Shipment tracking interface
│   ├── ServicesSection.tsx # Services showcase
│   ├── OrderList.tsx       # Order management interface
│   └── Footer.tsx          # Site footer
├── locales/                 # Internationalization
│   └── translations.ts     # Thai and English translations
├── theme.ts                # MUI theme configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Color Scheme

- **Primary Indigo**: `#4F46E5` (Fast Express brand color)
- **Primary Dark**: `#4338CA`
- **Primary Light**: `#6366F1`
- **Secondary**: `#475569`
- **Secondary Light**: `#64748B`

## 🖼️ Screenshots

### Main Tracking Page
![Tracking Page](https://github.com/user-attachments/assets/8b1be5b6-e7f2-413b-8d61-d5bcdc51a9f5)

### Tracking Result with Progress Stepper
![Tracking Result](https://github.com/user-attachments/assets/62622f38-9d00-4d2b-92f1-4efc691d577b)

### Order Management Interface
![Orders List](https://github.com/user-attachments/assets/2ae1b130-9c96-4fee-973e-bd96b910e9c3)

## 🔧 Configuration

### Tailwind CSS v4
The project uses Tailwind CSS v4 with the new `@import "tailwindcss"` syntax and `@theme` blocks for custom configuration.

### Material-UI v7
MUI components are integrated with custom theme configuration matching the Fast Express brand colors.

### Backend API
The NestJS backend provides RESTful API endpoints for:
- **Tracking**: `/api/tracking` - Package tracking operations
- **Orders**: `/api/orders` - Order management operations

See `backend/README.md` for detailed API documentation.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC

## 👤 Author

somkheartk

## 🙏 Acknowledgments

- Inspired by Fast Express Thailand
- Built with Next.js, Tailwind CSS, Material-UI, and NestJS
- Icons from MUI Icons library