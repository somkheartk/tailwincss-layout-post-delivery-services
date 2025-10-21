'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Box,
  Divider,
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';

const mockOrders = [
  {
    id: 'FEX123456789',
    date: '2024-10-20',
    status: 'กำลังจัดส่ง',
    from: 'กรุงเทพฯ',
    to: 'เชียงใหม่',
    items: 'อิเล็กทรอนิกส์ - 2 รายการ',
    amount: '฿450',
    statusColor: 'warning' as const,
  },
  {
    id: 'FEX987654321',
    date: '2024-10-18',
    status: 'จัดส่งสำเร็จ',
    from: 'กรุงเทพฯ',
    to: 'ภูเก็ต',
    items: 'เอกสาร - 1 ห่อ',
    amount: '฿120',
    statusColor: 'success' as const,
  },
  {
    id: 'FEX456789123',
    date: '2024-10-15',
    status: 'จัดส่งสำเร็จ',
    from: 'เชียงใหม่',
    to: 'กรุงเทพฯ',
    items: 'เสื้อผ้า - 3 รายการ',
    amount: '฿350',
    statusColor: 'success' as const,
  },
  {
    id: 'FEX789456123',
    date: '2024-10-19',
    status: 'กำลังจัดส่ง',
    from: 'ขอนแก่น',
    to: 'กรุงเทพฯ',
    items: 'หนังสือ - 5 เล่ม',
    amount: '฿280',
    statusColor: 'warning' as const,
  },
  {
    id: 'FEX321654987',
    date: '2024-10-17',
    status: 'จัดส่งสำเร็จ',
    from: 'กรุงเทพฯ',
    to: 'สงขลา',
    items: 'อุปกรณ์กีฬา - 1 ชุด',
    amount: '฿890',
    statusColor: 'success' as const,
  },
  {
    id: 'FEX147258369',
    date: '2024-10-21',
    status: 'กำลังจัดส่ง',
    from: 'ระยอง',
    to: 'กรุงเทพฯ',
    items: 'ของฝาก - 3 กล่อง',
    amount: '฿520',
    statusColor: 'warning' as const,
  },
];

const OrderList: React.FC = () => {
  return (
    <div className="mb-12">
      <Typography variant="h4" className="mb-6 font-bold text-gray-800">
        คำสั่งซื้อของฉัน
      </Typography>

      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div key={order.id}>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Box className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <Box className="flex items-center gap-3 mb-3">
                      <LocalShippingIcon className="text-primary" />
                      <Typography variant="h6" className="font-bold text-gray-800">
                        {order.id}
                      </Typography>
                      <Chip
                        label={order.status}
                        color={order.statusColor}
                        size="small"
                        className="font-semibold"
                      />
                    </Box>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <Typography variant="body2" className="text-gray-500">
                          วันที่
                        </Typography>
                        <Typography variant="body1" className="font-semibold">
                          {order.date}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body2" className="text-gray-500">
                          จาก → ถึง
                        </Typography>
                        <Typography variant="body1" className="font-semibold">
                          {order.from} → {order.to}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body2" className="text-gray-500">
                          รายการ
                        </Typography>
                        <Typography variant="body1" className="font-semibold">
                          {order.items}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body2" className="text-gray-500">
                          จำนวนเงิน
                        </Typography>
                        <Typography variant="body1" className="font-semibold text-primary">
                          {order.amount}
                        </Typography>
                      </div>
                    </div>
                  </div>
                  
                  <Divider orientation="vertical" flexItem className="hidden md:block" />
                  
                  <Box className="flex flex-row md:flex-col gap-2">
                    <Button
                      variant="outlined"
                      startIcon={<VisibilityIcon />}
                      size="small"
                      className="whitespace-nowrap"
                    >
                      ดูรายละเอียด
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<DownloadIcon />}
                      size="small"
                      className="whitespace-nowrap"
                    >
                      ใบแจ้งหนี้
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
