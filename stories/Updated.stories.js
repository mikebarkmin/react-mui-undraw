
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Updated from '../src/Updated';

export default {
  title: 'Updated',
  component: Updated,
};

export const Primary = () => <Updated color="primary" />;
export const Secondary = () => <Updated color="secondary" />;
export const Color = () => <Updated color={color('color', '#00FF00')} />;
    