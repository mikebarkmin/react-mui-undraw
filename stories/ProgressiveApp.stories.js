
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProgressiveApp from '../src/ProgressiveApp';

export default {
  title: 'ProgressiveApp',
  component: ProgressiveApp,
};

export const Primary = () => <ProgressiveApp color="primary" />;
export const Secondary = () => <ProgressiveApp color="secondary" />;
export const Color = () => <ProgressiveApp color={color('color', '#00FF00')} />;
    