
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MicDrop from '../src/MicDrop';

export default {
  title: 'MicDrop',
  component: MicDrop,
};

export const Primary = () => <MicDrop color="primary" />;
export const Secondary = () => <MicDrop color="secondary" />;
export const Color = () => <MicDrop color={color('color', '#00FF00')} />;
    