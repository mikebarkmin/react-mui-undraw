
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Camera from '../src/Camera';

export default {
  title: 'Camera',
  component: Camera,
};

export const Primary = () => <Camera color="primary" />;
export const Secondary = () => <Camera color="secondary" />;
export const Color = () => <Camera color={color('color', '#00FF00')} />;
    