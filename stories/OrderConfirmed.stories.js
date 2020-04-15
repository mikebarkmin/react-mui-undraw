
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OrderConfirmed from '../src/OrderConfirmed';

export default {
  title: 'OrderConfirmed',
  component: OrderConfirmed,
};

export const Primary = () => <OrderConfirmed color="primary" />;
export const Secondary = () => <OrderConfirmed color="secondary" />;
export const Color = () => <OrderConfirmed color={color('color', '#00FF00')} />;
    