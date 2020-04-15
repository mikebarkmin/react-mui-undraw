
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Documents from '../src/Documents';

export default {
  title: 'Documents',
  component: Documents,
};

export const Primary = () => <Documents color="primary" />;
export const Secondary = () => <Documents color="secondary" />;
export const Color = () => <Documents color={color('color', '#00FF00')} />;
    