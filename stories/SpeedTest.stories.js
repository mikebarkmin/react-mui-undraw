
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SpeedTest from '../src/SpeedTest';

export default {
  title: 'SpeedTest',
  component: SpeedTest,
};

export const Primary = () => <SpeedTest color="primary" />;
export const Secondary = () => <SpeedTest color="secondary" />;
export const Color = () => <SpeedTest color={color('color', '#00FF00')} />;
    