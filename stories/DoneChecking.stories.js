
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DoneChecking from '../src/DoneChecking';

export default {
  title: 'DoneChecking',
  component: DoneChecking,
};

export const Primary = () => <DoneChecking color="primary" />;
export const Secondary = () => <DoneChecking color="secondary" />;
export const Color = () => <DoneChecking color={color('color', '#00FF00')} />;
    