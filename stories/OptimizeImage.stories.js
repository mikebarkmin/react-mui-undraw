
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OptimizeImage from '../src/OptimizeImage';

export default {
  title: 'OptimizeImage',
  component: OptimizeImage,
};

export const Primary = () => <OptimizeImage color="primary" />;
export const Secondary = () => <OptimizeImage color="secondary" />;
export const Color = () => <OptimizeImage color={color('color', '#00FF00')} />;
    