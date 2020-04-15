
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PieChart from '../src/PieChart';

export default {
  title: 'PieChart',
  component: PieChart,
};

export const Primary = () => <PieChart color="primary" />;
export const Secondary = () => <PieChart color="secondary" />;
export const Color = () => <PieChart color={color('color', '#00FF00')} />;
    