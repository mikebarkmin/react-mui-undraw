
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProgressIndicator from '../src/ProgressIndicator';

export default {
  title: 'ProgressIndicator',
  component: ProgressIndicator,
};

export const Primary = () => <ProgressIndicator color="primary" />;
export const Secondary = () => <ProgressIndicator color="secondary" />;
export const Color = () => <ProgressIndicator color={color('color', '#00FF00')} />;
    