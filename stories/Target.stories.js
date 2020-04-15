
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Target from '../src/Target';

export default {
  title: 'Target',
  component: Target,
};

export const Primary = () => <Target color="primary" />;
export const Secondary = () => <Target color="secondary" />;
export const Color = () => <Target color={color('color', '#00FF00')} />;
    