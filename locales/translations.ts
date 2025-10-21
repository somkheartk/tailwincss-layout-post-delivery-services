export type Language = 'th' | 'en';

export const translations = {
  th: {
    // Header
    appName: 'แฟลช เอ็กซ์เพรส',
    language: 'ภาษา',
    role: 'สิทธิ์',
    
    // Roles
    roles: {
      customer: 'ลูกค้า',
      driver: 'พนักงานขับรถ',
      admin: 'ผู้ดูแลระบบ',
    },
    
    // Menu
    menu: {
      tracking: 'ติดตาม',
      send: 'ส่งพัสดุ',
      services: 'บริการ',
      about: 'เกี่ยวกับ',
      orders: 'คำสั่งซื้อ',
      dashboard: 'แดชบอร์ด',
    },
    
    // Tabs
    trackingTab: 'ติดตามพัสดุ',
    ordersTab: 'คำสั่งซื้อของฉัน',
    
    // Tracking Section
    trackingTitle: 'ติดตามพัสดุของคุณ',
    trackingDescription: 'กรุณากรอกหมายเลขติดตามเพื่อดูสถานะการจัดส่งแบบเรียลไทม์',
    trackingPlaceholder: 'กรอกหมายเลขติดตาม (เช่น FEX123456789)',
    search: 'ค้นหา',
    
    // Services Section
    servicesTitle: 'ทำไมต้องเลือกแฟลช เอ็กซ์เพรส?',
    service1Title: 'จัดส่งรวดเร็ว',
    service1Desc: 'บริการจัดส่งในวันเดียวกันในเมืองใหญ่',
    service2Title: 'ปลอดภัยมั่นคง',
    service2Desc: 'พัสดุของคุณได้รับการประกันและดูแลอย่างดี',
    service3Title: 'ครอบคลุมทั่วไทย',
    service3Desc: 'เครือข่ายจัดส่งทั่วประเทศไทย',
    service4Title: 'บริการตลอด 24/7',
    service4Desc: 'บริการลูกค้าพร้อมให้บริการตลอด 24 ชั่วโมง',
    
    // Footer
    footerAbout: 'พันธมิตรที่เชื่อถือได้สำหรับบริการจัดส่งที่รวดเร็วและน่าเชื่อถือทั่วประเทศไทย',
    footerServices: 'บริการ',
    footerHelp: 'ช่วยเหลือ',
    footerContact: 'ติดต่อ',
    footerCopyright: '© 2024 แฟลช เอ็กซ์เพรส สงวนลิขสิทธิ์',
  },
  en: {
    // Header
    appName: 'Flash Express',
    language: 'Language',
    role: 'Role',
    
    // Roles
    roles: {
      customer: 'Customer',
      driver: 'Driver',
      admin: 'Administrator',
    },
    
    // Menu
    menu: {
      tracking: 'Track',
      send: 'Send Package',
      services: 'Services',
      about: 'About',
      orders: 'Orders',
      dashboard: 'Dashboard',
    },
    
    // Tabs
    trackingTab: 'Track Package',
    ordersTab: 'My Orders',
    
    // Tracking Section
    trackingTitle: 'Track Your Package',
    trackingDescription: 'Please enter tracking number to view real-time delivery status',
    trackingPlaceholder: 'Enter tracking number (e.g. FEX123456789)',
    search: 'Search',
    
    // Services Section
    servicesTitle: 'Why Choose Flash Express?',
    service1Title: 'Fast Delivery',
    service1Desc: 'Same-day delivery service in major cities',
    service2Title: 'Safe & Secure',
    service2Desc: 'Your packages are insured and well taken care of',
    service3Title: 'Nationwide Coverage',
    service3Desc: 'Delivery network throughout Thailand',
    service4Title: '24/7 Service',
    service4Desc: 'Customer service available 24 hours',
    
    // Footer
    footerAbout: 'Your trusted partner for fast and reliable delivery service throughout Thailand',
    footerServices: 'Services',
    footerHelp: 'Help',
    footerContact: 'Contact',
    footerCopyright: '© 2024 Flash Express. All rights reserved',
  },
};

export const getTranslation = (lang: Language) => translations[lang];
