
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Gaming from '../src/Gaming';

export default {
  title: 'Gaming',
  component: Gaming,
};

export const Primary = () => <Gaming color="primary" />;
export const Secondary = () => <Gaming color="secondary" />;
export const Color = () => <Gaming color={color('color', '#00FF00')} />;
    