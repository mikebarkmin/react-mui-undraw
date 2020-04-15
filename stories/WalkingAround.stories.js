
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WalkingAround from '../src/WalkingAround';

export default {
  title: 'WalkingAround',
  component: WalkingAround,
};

export const Primary = () => <WalkingAround color="primary" />;
export const Secondary = () => <WalkingAround color="secondary" />;
export const Color = () => <WalkingAround color={color('color', '#00FF00')} />;
    