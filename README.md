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
- **Orange & White Theme**: Modern orange (#FF6600) and white color scheme inspired by Flash Express
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Modern UI Components**: Material-UI components with Tailwind CSS styling
- **Tab Navigation**: Seamless switching between tracking and orders
- **Professional Footer**: Contact info, services, and social links with orange accents
- **Complete Screen Mocks**: Fully functional tracking and order management interfaces with sample data

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

- **Primary Orange**: `#FF6600` (Flash Express brand color)
- **Primary Dark**: `#E55A00`
- **Primary Light**: `#FF7711`
- **Secondary**: `#475569`
- **Secondary Light**: `#64748B`
- **White**: `#FFFFFF` (Used for clean, modern backgrounds)

## 🖼️ Screenshots

### Main Tracking Page (Orange Theme)
![Tracking Page](https://github.com/user-attachments/assets/3312b279-8367-4e43-b38f-46ba04a31510)

### Tracking Result with Progress Stepper (Orange Theme)
![Tracking Result](https://github.com/user-attachments/assets/7b6dd364-9cde-49b2-add1-28cf330e073b)

### Order Management Interface (Orange Theme)
![Orders List](https://github.com/user-attachments/assets/1098db40-c0e6-4ad0-952c-0ecbe3512cb1)

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