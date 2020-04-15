
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OrderACar from '../src/OrderACar';

export default {
  title: 'OrderACar',
  component: OrderACar,
};

export const Primary = () => <OrderACar color="primary" />;
export const Secondary = () => <OrderACar color="secondary" />;
export const Color = () => <OrderACar color={color('color', '#00FF00')} />;
    