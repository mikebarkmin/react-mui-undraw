
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Plans from '../src/Plans';

export default {
  title: 'Plans',
  component: Plans,
};

export const Primary = () => <Plans color="primary" />;
export const Secondary = () => <Plans color="secondary" />;
export const Color = () => <Plans color={color('color', '#00FF00')} />;
    