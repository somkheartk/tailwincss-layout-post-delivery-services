'use client';

import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Stepper, Step, StepLabel, Box, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const TrackingSection: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const handleTrack = () => {
    // Mock tracking data
    setTrackingResult({
      trackingNumber: trackingNumber || 'FEX123456789',
      status: 'In Transit',
      currentStep: 2,
      steps: [
        { label: 'Order Placed', date: '2024-10-19 10:30', completed: true },
        { label: 'Picked Up', date: '2024-10-19 14:20', completed: true },
        { label: 'In Transit', date: '2024-10-20 08:15', completed: true },
        { label: 'Out for Delivery', date: '', completed: false },
        { label: 'Delivered', date: '', completed: false },
      ],
      sender: 'Bangkok Warehouse',
      receiver: 'John Doe, Chiang Mai',
      estimatedDelivery: '2024-10-21',
    });
  };

  return (
    <div className="mb-12">
      <Card className="shadow-lg mb-6">
        <CardContent className="p-8">
          <Typography variant="h4" className="mb-4 text-gray-800 font-bold">
            Track Your Shipment
          </Typography>
          <Typography variant="body1" className="mb-6 text-gray-600">
            Enter your tracking number to get real-time updates on your delivery
          </Typography>
          
          <div className="flex gap-4 mb-4">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter tracking number (e.g., FEX123456789)"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="bg-white"
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SearchIcon />}
              onClick={handleTrack}
              className="px-8 bg-primary hover:bg-primary-dark"
              sx={{ minWidth: '150px' }}
            >
              Track
            </Button>
          </div>
        </CardContent>
      </Card>

      {trackingResult && (
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <Box className="flex justify-between items-start mb-6">
              <div>
                <Typography variant="h5" className="font-bold text-gray-800 mb-2">
                  Tracking Number: {trackingResult.trackingNumber}
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-1">
                  From: {trackingResult.sender}
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-1">
                  To: {trackingResult.receiver}
                </Typography>
              </div>
              <Chip
                icon={<LocalShippingIcon />}
                label={trackingResult.status}
                color="primary"
                className="font-semibold"
              />
            </Box>

            <Stepper activeStep={trackingResult.currentStep} alternativeLabel className="mb-6">
              {trackingResult.steps.map((step: any, index: number) => (
                <Step key={index} completed={step.completed}>
                  <StepLabel className="text-sm">
                    <div className="text-center">
                      <div className="font-semibold">{step.label}</div>
                      {step.date && (
                        <div className="text-xs text-gray-500 mt-1">{step.date}</div>
                      )}
                    </div>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>

            <Box className="bg-orange-50 p-4 rounded-lg mt-6">
              <Typography variant="body1" className="font-semibold text-gray-800">
                Estimated Delivery: {trackingResult.estimatedDelivery}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TrackingSection;
