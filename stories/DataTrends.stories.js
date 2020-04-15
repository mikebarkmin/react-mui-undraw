
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DataTrends from '../src/DataTrends';

export default {
  title: 'DataTrends',
  component: DataTrends,
};

export const Primary = () => <DataTrends color="primary" />;
export const Secondary = () => <DataTrends color="secondary" />;
export const Color = () => <DataTrends color={color('color', '#00FF00')} />;
    