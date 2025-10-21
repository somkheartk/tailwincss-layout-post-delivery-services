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
              แฟลช เอ็กซ์เพรส
            </Typography>
            <Typography variant="body2" className="mb-4 text-gray-300">
              พันธมิตรที่เชื่อถือได้สำหรับบริการจัดส่งที่รวดเร็วและน่าเชื่อถือทั่วประเทศไทย
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
              บริการ
            </Typography>
            <Box className="flex flex-col gap-2">
              <Link href="#" color="inherit" className="text-gray-300 hover:text-primary no-underline">
                จัดส่งด่วน
              </Link>
              <Link href="#" color="inherit" className="text-gray-300 hover:text-primary no-underline">
                จัดส่งวันเดียว
              </Link>
              <Link href="#" color="inherit" className="text-gray-300 hover:text-primary no-underline">
                ระหว่างประเทศ
              </Link>
              <Link href="#" color="inherit" className="text-gray-300 hover:text-primary no-underline">
                จัดส่งจำนวนมาก
              </Link>
            </Box>
          </div>
          
          <div className="md:col-span-2">
            <Typography variant="h6" className="font-bold mb-4">
              ช่วยเหลือ
            </Typography>
            <Box className="flex flex-col gap-2">
              <Link href="#" color="inherit" className="text-gray-300 hover:text-primary no-underline">
                ศูนย์ช่วยเหลือ
              </Link>
              <Link href="#" color="inherit" className="text-gray-300 hover:text-primary no-underline">
                ติดตามพัสดุ
              </Link>
              <Link href="#" color="inherit" className="text-gray-300 hover:text-primary no-underline">
                ติดต่อเรา
              </Link>
              <Link href="#" color="inherit" className="text-gray-300 hover:text-primary no-underline">
                คำถามที่พบบ่อย
              </Link>
            </Box>
          </div>
          
          <div className="md:col-span-4">
            <Typography variant="h6" className="font-bold mb-4">
              ติดต่อ
            </Typography>
            <Typography variant="body2" className="text-gray-300 mb-2">
              📞 สายด่วน: 1234-5678
            </Typography>
            <Typography variant="body2" className="text-gray-300 mb-2">
              📧 อีเมล: support@flashexpress.com
            </Typography>
            <Typography variant="body2" className="text-gray-300">
              📍 กรุงเทพมหานคร ประเทศไทย
            </Typography>
          </div>
        </div>
        
        <Box className="border-t border-gray-700 mt-8 pt-8 text-center">
          <Typography variant="body2" className="text-gray-400">
            © 2024 แฟลช เอ็กซ์เพรส สงวนลิขสิทธิ์
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
