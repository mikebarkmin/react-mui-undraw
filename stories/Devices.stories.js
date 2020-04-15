
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Devices from '../src/Devices';

export default {
  title: 'Devices',
  component: Devices,
};

export const Primary = () => <Devices color="primary" />;
export const Secondary = () => <Devices color="secondary" />;
export const Color = () => <Devices color={color('color', '#00FF00')} />;
    