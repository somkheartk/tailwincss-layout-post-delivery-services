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
    title: 'Fast Delivery',
    description: 'Same-day delivery available in major cities',
  },
  {
    icon: <SecurityIcon className="text-primary" sx={{ fontSize: 48 }} />,
    title: 'Secure Handling',
    description: 'Your packages are insured and handled with care',
  },
  {
    icon: <LocalShippingIcon className="text-primary" sx={{ fontSize: 48 }} />,
    title: 'Wide Coverage',
    description: 'Nationwide delivery network across Thailand',
  },
  {
    icon: <SupportAgentIcon className="text-primary" sx={{ fontSize: 48 }} />,
    title: '24/7 Support',
    description: 'Customer service available around the clock',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <div className="mb-12">
      <Typography variant="h4" className="text-center mb-8 font-bold text-gray-800">
        Why Choose Flash Express?
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
