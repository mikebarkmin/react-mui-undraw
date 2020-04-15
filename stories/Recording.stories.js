
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Recording from '../src/Recording';

export default {
  title: 'Recording',
  component: Recording,
};

export const Primary = () => <Recording color="primary" />;
export const Secondary = () => <Recording color="secondary" />;
export const Color = () => <Recording color={color('color', '#00FF00')} />;
    