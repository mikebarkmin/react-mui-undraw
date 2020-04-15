
import React from 'react';
import { color } from '@storybook/addon-knobs';
import StandOut from '../src/StandOut';

export default {
  title: 'StandOut',
  component: StandOut,
};

export const Primary = () => <StandOut color="primary" />;
export const Secondary = () => <StandOut color="secondary" />;
export const Color = () => <StandOut color={color('color', '#00FF00')} />;
    