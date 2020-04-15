
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TimeManagement from '../src/TimeManagement';

export default {
  title: 'TimeManagement',
  component: TimeManagement,
};

export const Primary = () => <TimeManagement color="primary" />;
export const Secondary = () => <TimeManagement color="secondary" />;
export const Color = () => <TimeManagement color={color('color', '#00FF00')} />;
    