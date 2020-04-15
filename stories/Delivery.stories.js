
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Delivery from '../src/Delivery';

export default {
  title: 'Delivery',
  component: Delivery,
};

export const Primary = () => <Delivery color="primary" />;
export const Secondary = () => <Delivery color="secondary" />;
export const Color = () => <Delivery color={color('color', '#00FF00')} />;
    