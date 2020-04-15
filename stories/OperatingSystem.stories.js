
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OperatingSystem from '../src/OperatingSystem';

export default {
  title: 'OperatingSystem',
  component: OperatingSystem,
};

export const Primary = () => <OperatingSystem color="primary" />;
export const Secondary = () => <OperatingSystem color="secondary" />;
export const Color = () => <OperatingSystem color={color('color', '#00FF00')} />;
    