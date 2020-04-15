
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Security from '../src/Security';

export default {
  title: 'Security',
  component: Security,
};

export const Primary = () => <Security color="primary" />;
export const Secondary = () => <Security color="secondary" />;
export const Color = () => <Security color={color('color', '#00FF00')} />;
    