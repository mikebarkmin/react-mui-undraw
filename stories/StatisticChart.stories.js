
import React from 'react';
import { color } from '@storybook/addon-knobs';
import StatisticChart from '../src/StatisticChart';

export default {
  title: 'StatisticChart',
  component: StatisticChart,
};

export const Primary = () => <StatisticChart color="primary" />;
export const Secondary = () => <StatisticChart color="secondary" />;
export const Color = () => <StatisticChart color={color('color', '#00FF00')} />;
    