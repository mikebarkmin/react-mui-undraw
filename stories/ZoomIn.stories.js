
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ZoomIn from '../src/ZoomIn';

export default {
  title: 'ZoomIn',
  component: ZoomIn,
};

export const Primary = () => <ZoomIn color="primary" />;
export const Secondary = () => <ZoomIn color="secondary" />;
export const Color = () => <ZoomIn color={color('color', '#00FF00')} />;
    