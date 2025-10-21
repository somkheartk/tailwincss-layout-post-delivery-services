'use client';

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import SecurityIcon from '@mui/icons-material/Security';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Language } from '@/locales/translations';

interface ServicesSectionProps {
  language: Language;
  t: any;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ language, t }) => {
  const services = [
    {
      icon: <FlashOnIcon className="text-primary" sx={{ fontSize: 48 }} />,
      title: t.service1Title,
      description: t.service1Desc,
    },
    {
      icon: <SecurityIcon className="text-primary" sx={{ fontSize: 48 }} />,
      title: t.service2Title,
      description: t.service2Desc,
    },
    {
      icon: <LocalShippingIcon className="text-primary" sx={{ fontSize: 48 }} />,
      title: t.service3Title,
      description: t.service3Desc,
    },
    {
      icon: <SupportAgentIcon className="text-primary" sx={{ fontSize: 48 }} />,
      title: t.service4Title,
      description: t.service4Desc,
    },
  ];

  return (
    <div className="mb-12">
      <Typography variant="h4" className="text-center mb-8 font-bold text-gray-800">
        {t.servicesTitle}
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
