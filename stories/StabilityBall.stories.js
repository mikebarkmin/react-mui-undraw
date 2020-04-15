
import React from 'react';
import { color } from '@storybook/addon-knobs';
import StabilityBall from '../src/StabilityBall';

export default {
  title: 'StabilityBall',
  component: StabilityBall,
};

export const Primary = () => <StabilityBall color="primary" />;
export const Secondary = () => <StabilityBall color="secondary" />;
export const Color = () => <StabilityBall color={color('color', '#00FF00')} />;
    