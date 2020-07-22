
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DataProcessing from '../src/DataProcessing';

export default {
  title: 'DataProcessing',
  component: DataProcessing,
};

export const Primary = () => <DataProcessing color="primary" />;
export const Secondary = () => <DataProcessing color="secondary" />;
export const Color = () => <DataProcessing color={color('color', '#00FF00')} />;
    