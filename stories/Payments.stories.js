
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Payments from '../src/Payments';

export default {
  title: 'Payments',
  component: Payments,
};

export const Primary = () => <Payments color="primary" />;
export const Secondary = () => <Payments color="secondary" />;
export const Color = () => <Payments color={color('color', '#00FF00')} />;
    