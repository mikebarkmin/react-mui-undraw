
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MomentToRemember from '../src/MomentToRemember';

export default {
  title: 'MomentToRemember',
  component: MomentToRemember,
};

export const Primary = () => <MomentToRemember color="primary" />;
export const Secondary = () => <MomentToRemember color="secondary" />;
export const Color = () => <MomentToRemember color={color('color', '#00FF00')} />;
    