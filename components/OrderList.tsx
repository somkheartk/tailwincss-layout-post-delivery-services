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
    status: 'In Transit',
    from: 'Bangkok',
    to: 'Chiang Mai',
    items: 'Electronics - 2 items',
    amount: '฿450',
    statusColor: 'warning' as const,
  },
  {
    id: 'FEX987654321',
    date: '2024-10-18',
    status: 'Delivered',
    from: 'Bangkok',
    to: 'Phuket',
    items: 'Documents - 1 package',
    amount: '฿120',
    statusColor: 'success' as const,
  },
  {
    id: 'FEX456789123',
    date: '2024-10-15',
    status: 'Delivered',
    from: 'Chiang Mai',
    to: 'Bangkok',
    items: 'Clothing - 3 items',
    amount: '฿350',
    statusColor: 'success' as const,
  },
];

const OrderList: React.FC = () => {
  return (
    <div className="mb-12">
      <Typography variant="h4" className="mb-6 font-bold text-gray-800">
        My Orders
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
                          Date
                        </Typography>
                        <Typography variant="body1" className="font-semibold">
                          {order.date}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body2" className="text-gray-500">
                          From → To
                        </Typography>
                        <Typography variant="body1" className="font-semibold">
                          {order.from} → {order.to}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body2" className="text-gray-500">
                          Items
                        </Typography>
                        <Typography variant="body1" className="font-semibold">
                          {order.items}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="body2" className="text-gray-500">
                          Amount
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
                      View Details
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<DownloadIcon />}
                      size="small"
                      className="whitespace-nowrap"
                    >
                      Invoice
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
