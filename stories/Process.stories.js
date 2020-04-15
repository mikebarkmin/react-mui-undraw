
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Process from '../src/Process';

export default {
  title: 'Process',
  component: Process,
};

export const Primary = () => <Process color="primary" />;
export const Secondary = () => <Process color="secondary" />;
export const Color = () => <Process color={color('color', '#00FF00')} />;
    