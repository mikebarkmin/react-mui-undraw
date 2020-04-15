
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Selfie from '../src/Selfie';

export default {
  title: 'Selfie',
  component: Selfie,
};

export const Primary = () => <Selfie color="primary" />;
export const Secondary = () => <Selfie color="secondary" />;
export const Color = () => <Selfie color={color('color', '#00FF00')} />;
    