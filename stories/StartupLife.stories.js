
import React from 'react';
import { color } from '@storybook/addon-knobs';
import StartupLife from '../src/StartupLife';

export default {
  title: 'StartupLife',
  component: StartupLife,
};

export const Primary = () => <StartupLife color="primary" />;
export const Secondary = () => <StartupLife color="secondary" />;
export const Color = () => <StartupLife color={color('color', '#00FF00')} />;
    