
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileUx from '../src/MobileUx';

export default {
  title: 'MobileUx',
  component: MobileUx,
};

export const Primary = () => <MobileUx color="primary" />;
export const Secondary = () => <MobileUx color="secondary" />;
export const Color = () => <MobileUx color={color('color', '#00FF00')} />;
    