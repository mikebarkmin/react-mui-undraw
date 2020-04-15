
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TakingSelfie from '../src/TakingSelfie';

export default {
  title: 'TakingSelfie',
  component: TakingSelfie,
};

export const Primary = () => <TakingSelfie color="primary" />;
export const Secondary = () => <TakingSelfie color="secondary" />;
export const Color = () => <TakingSelfie color={color('color', '#00FF00')} />;
    