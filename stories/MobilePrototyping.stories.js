
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobilePrototyping from '../src/MobilePrototyping';

export default {
  title: 'MobilePrototyping',
  component: MobilePrototyping,
};

export const Primary = () => <MobilePrototyping color="primary" />;
export const Secondary = () => <MobilePrototyping color="secondary" />;
export const Color = () => <MobilePrototyping color={color('color', '#00FF00')} />;
    