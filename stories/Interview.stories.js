
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Interview from '../src/Interview';

export default {
  title: 'Interview',
  component: Interview,
};

export const Primary = () => <Interview color="primary" />;
export const Secondary = () => <Interview color="secondary" />;
export const Color = () => <Interview color={color('color', '#00FF00')} />;
    