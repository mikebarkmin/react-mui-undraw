
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OrderRide from '../src/OrderRide';

export default {
  title: 'OrderRide',
  component: OrderRide,
};

export const Primary = () => <OrderRide color="primary" />;
export const Secondary = () => <OrderRide color="secondary" />;
export const Color = () => <OrderRide color={color('color', '#00FF00')} />;
    