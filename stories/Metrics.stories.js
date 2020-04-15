
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Metrics from '../src/Metrics';

export default {
  title: 'Metrics',
  component: Metrics,
};

export const Primary = () => <Metrics color="primary" />;
export const Secondary = () => <Metrics color="secondary" />;
export const Color = () => <Metrics color={color('color', '#00FF00')} />;
    