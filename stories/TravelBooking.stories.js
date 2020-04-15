
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TravelBooking from '../src/TravelBooking';

export default {
  title: 'TravelBooking',
  component: TravelBooking,
};

export const Primary = () => <TravelBooking color="primary" />;
export const Secondary = () => <TravelBooking color="secondary" />;
export const Color = () => <TravelBooking color={color('color', '#00FF00')} />;
    