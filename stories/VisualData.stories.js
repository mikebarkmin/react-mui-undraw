
import React from 'react';
import { color } from '@storybook/addon-knobs';
import VisualData from '../src/VisualData';

export default {
  title: 'VisualData',
  component: VisualData,
};

export const Primary = () => <VisualData color="primary" />;
export const Secondary = () => <VisualData color="secondary" />;
export const Color = () => <VisualData color={color('color', '#00FF00')} />;
    