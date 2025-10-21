'use client';

import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <Box component="footer" className="bg-gray-800 text-white py-12 mt-16">
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <Typography variant="h6" className="font-bold mb-4">
              Flash Express
            </Typography>
            <Typography variant="body2" className="mb-4 text-gray-300">
              Your trusted partner for fast and reliable delivery services across Thailand.
            </Typography>
            <Box className="flex gap-3">
              <FacebookIcon className="cursor-pointer hover:text-primary transition-colors" />
              <TwitterIcon className="cursor-pointer hover:text-primary transition-colors" />
              <InstagramIcon className="cursor-pointer hover:text-primary transition-colors" />
              <LinkedInIcon className="cursor-pointer hover:text-primary transition-colors" />
            </Box>
          </div>
          
          <div className="md:col-span-2">
            <Typography variant="h6" className="font-bold mb-4">
              Services
            </Typography>
            <Box className="flex flex-col gap-2">
              <Link href="#" color="inherit" className="text-gray-300 hover:text-primary no-underline">
                Express Delivery
              </Link>
              <Link href="#" color="inherit" className="text-gray-300 hover:text-primary no-underline">
                Same Day
              </Link>
              <Link href="#" color="inherit" className="text-gray-300 hover:text-primary no-underline">
                International
              </Link>
              <Link href="#" color="inherit" className="text-gray-300 hover:text-primary no-underline">
                Bulk Shipping
              </Link>
            </Box>
          </div>
          
          <div className="md:col-span-2">
            <Typography variant="h6" className="font-bold mb-4">
              Support
            </Typography>
            <Box className="flex flex-col gap-2">
              <Link href="#" color="inherit" className="text-gray-300 hover:text-primary no-underline">
                Help Center
              </Link>
              <Link href="#" color="inherit" className="text-gray-300 hover:text-primary no-underline">
                Track Order
              </Link>
              <Link href="#" color="inherit" className="text-gray-300 hover:text-primary no-underline">
                Contact Us
              </Link>
              <Link href="#" color="inherit" className="text-gray-300 hover:text-primary no-underline">
                FAQ
              </Link>
            </Box>
          </div>
          
          <div className="md:col-span-4">
            <Typography variant="h6" className="font-bold mb-4">
              Contact
            </Typography>
            <Typography variant="body2" className="text-gray-300 mb-2">
              📞 Hotline: 1234-5678
            </Typography>
            <Typography variant="body2" className="text-gray-300 mb-2">
              📧 Email: support@flashexpress.com
            </Typography>
            <Typography variant="body2" className="text-gray-300">
              📍 Bangkok, Thailand
            </Typography>
          </div>
        </div>
        
        <Box className="border-t border-gray-700 mt-8 pt-8 text-center">
          <Typography variant="body2" className="text-gray-400">
            © 2024 Flash Express. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
