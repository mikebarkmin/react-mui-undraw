
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DeliveryAddress from '../src/DeliveryAddress';

export default {
  title: 'DeliveryAddress',
  component: DeliveryAddress,
};

export const Primary = () => <DeliveryAddress color="primary" />;
export const Secondary = () => <DeliveryAddress color="secondary" />;
export const Color = () => <DeliveryAddress color={color('color', '#00FF00')} />;
    