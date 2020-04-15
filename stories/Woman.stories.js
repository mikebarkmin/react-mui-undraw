
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Woman from '../src/Woman';

export default {
  title: 'Woman',
  component: Woman,
};

export const Primary = () => <Woman color="primary" />;
export const Secondary = () => <Woman color="secondary" />;
export const Color = () => <Woman color={color('color', '#00FF00')} />;
    