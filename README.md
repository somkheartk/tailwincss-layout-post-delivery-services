# Flash Express - Post Delivery Services

A modern, responsive post delivery tracking and management system built with Next.js, Tailwind CSS, and Material-UI. Inspired by Flash Express Thailand's delivery service interface.

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

- **Framework**: Next.js 15.5.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with @tailwindcss/postcss
- **UI Components**: Material-UI (MUI) v7
- **Icons**: MUI Icons
- **Runtime**: Node.js

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/somkheartk/tailwincss-layout-post-delivery-services.git
   cd tailwincss-layout-post-delivery-services
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Lint Code
```bash
npm run lint
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with MUI theme provider
│   ├── page.tsx            # Main page with tab navigation
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── TrackingSection.tsx # Shipment tracking interface
│   ├── ServicesSection.tsx # Services showcase
│   ├── OrderList.tsx       # Order management interface
│   └── Footer.tsx          # Site footer
├── theme.ts                # MUI theme configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Color Scheme

- **Primary Orange**: `#FF6600` (Flash Express brand color)
- **Primary Dark**: `#E55A00`
- **Primary Light**: `#FF8533`
- **Secondary**: `#333333`
- **Secondary Light**: `#666666`

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
MUI components are integrated with custom theme configuration matching the Flash Express brand colors.

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

- Inspired by Flash Express Thailand
- Built with Next.js, Tailwind CSS, and Material-UI
- Icons from MUI Icons library