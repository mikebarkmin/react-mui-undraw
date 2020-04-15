
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Windows from '../src/Windows';

export default {
  title: 'Windows',
  component: Windows,
};

export const Primary = () => <Windows color="primary" />;
export const Secondary = () => <Windows color="secondary" />;
export const Color = () => <Windows color={color('color', '#00FF00')} />;
    