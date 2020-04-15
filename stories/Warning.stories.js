
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Warning from '../src/Warning';

export default {
  title: 'Warning',
  component: Warning,
};

export const Primary = () => <Warning color="primary" />;
export const Secondary = () => <Warning color="secondary" />;
export const Color = () => <Warning color={color('color', '#00FF00')} />;
    