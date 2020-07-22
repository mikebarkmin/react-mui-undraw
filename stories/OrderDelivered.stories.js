
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OrderDelivered from '../src/OrderDelivered';

export default {
  title: 'OrderDelivered',
  component: OrderDelivered,
};

export const Primary = () => <OrderDelivered color="primary" />;
export const Secondary = () => <OrderDelivered color="secondary" />;
export const Color = () => <OrderDelivered color={color('color', '#00FF00')} />;
    