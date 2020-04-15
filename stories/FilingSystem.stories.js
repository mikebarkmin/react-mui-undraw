
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FilingSystem from '../src/FilingSystem';

export default {
  title: 'FilingSystem',
  component: FilingSystem,
};

export const Primary = () => <FilingSystem color="primary" />;
export const Secondary = () => <FilingSystem color="secondary" />;
export const Color = () => <FilingSystem color={color('color', '#00FF00')} />;
    