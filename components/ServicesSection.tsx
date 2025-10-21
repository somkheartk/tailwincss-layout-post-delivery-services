'use client';

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import SecurityIcon from '@mui/icons-material/Security';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const services = [
  {
    icon: <FlashOnIcon className="text-primary" sx={{ fontSize: 48 }} />,
    title: 'จัดส่งรวดเร็ว',
    description: 'บริการจัดส่งในวันเดียวกันในเมืองใหญ่',
  },
  {
    icon: <SecurityIcon className="text-primary" sx={{ fontSize: 48 }} />,
    title: 'ปลอดภัยมั่นคง',
    description: 'พัสดุของคุณได้รับการประกันและดูแลอย่างดี',
  },
  {
    icon: <LocalShippingIcon className="text-primary" sx={{ fontSize: 48 }} />,
    title: 'ครอบคลุมทั่วไทย',
    description: 'เครือข่ายจัดส่งทั่วประเทศไทย',
  },
  {
    icon: <SupportAgentIcon className="text-primary" sx={{ fontSize: 48 }} />,
    title: 'บริการตลอด 24/7',
    description: 'บริการลูกค้าพร้อมให้บริการตลอด 24 ชั่วโมง',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <div className="mb-12">
      <Typography variant="h4" className="text-center mb-8 font-bold text-gray-800">
        ทำไมต้องเลือกแฟลช เอ็กซ์เพรส?
      </Typography>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="h-full shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="text-center p-6">
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                <Typography variant="h6" className="font-bold mb-2 text-gray-800">
                  {service.title}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
