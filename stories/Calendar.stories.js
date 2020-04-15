
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Calendar from '../src/Calendar';

export default {
  title: 'Calendar',
  component: Calendar,
};

export const Primary = () => <Calendar color="primary" />;
export const Secondary = () => <Calendar color="secondary" />;
export const Color = () => <Calendar color={color('color', '#00FF00')} />;
    