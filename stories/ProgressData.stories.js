
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProgressData from '../src/ProgressData';

export default {
  title: 'ProgressData',
  component: ProgressData,
};

export const Primary = () => <ProgressData color="primary" />;
export const Secondary = () => <ProgressData color="secondary" />;
export const Color = () => <ProgressData color={color('color', '#00FF00')} />;
    