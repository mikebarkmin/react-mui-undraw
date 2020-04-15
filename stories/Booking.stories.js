
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Booking from '../src/Booking';

export default {
  title: 'Booking',
  component: Booking,
};

export const Primary = () => <Booking color="primary" />;
export const Secondary = () => <Booking color="secondary" />;
export const Color = () => <Booking color={color('color', '#00FF00')} />;
    