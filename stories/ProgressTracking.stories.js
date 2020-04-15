
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProgressTracking from '../src/ProgressTracking';

export default {
  title: 'ProgressTracking',
  component: ProgressTracking,
};

export const Primary = () => <ProgressTracking color="primary" />;
export const Secondary = () => <ProgressTracking color="secondary" />;
export const Color = () => <ProgressTracking color={color('color', '#00FF00')} />;
    