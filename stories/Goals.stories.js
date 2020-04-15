
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Goals from '../src/Goals';

export default {
  title: 'Goals',
  component: Goals,
};

export const Primary = () => <Goals color="primary" />;
export const Secondary = () => <Goals color="secondary" />;
export const Color = () => <Goals color={color('color', '#00FF00')} />;
    