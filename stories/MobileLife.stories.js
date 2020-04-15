
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileLife from '../src/MobileLife';

export default {
  title: 'MobileLife',
  component: MobileLife,
};

export const Primary = () => <MobileLife color="primary" />;
export const Secondary = () => <MobileLife color="secondary" />;
export const Color = () => <MobileLife color={color('color', '#00FF00')} />;
    