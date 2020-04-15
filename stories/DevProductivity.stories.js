
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DevProductivity from '../src/DevProductivity';

export default {
  title: 'DevProductivity',
  component: DevProductivity,
};

export const Primary = () => <DevProductivity color="primary" />;
export const Secondary = () => <DevProductivity color="secondary" />;
export const Color = () => <DevProductivity color={color('color', '#00FF00')} />;
    