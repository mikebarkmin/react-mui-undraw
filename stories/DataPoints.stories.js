
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DataPoints from '../src/DataPoints';

export default {
  title: 'DataPoints',
  component: DataPoints,
};

export const Primary = () => <DataPoints color="primary" />;
export const Secondary = () => <DataPoints color="secondary" />;
export const Color = () => <DataPoints color={color('color', '#00FF00')} />;
    