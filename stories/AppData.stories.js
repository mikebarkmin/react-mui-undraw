
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AppData from '../src/AppData';

export default {
  title: 'AppData',
  component: AppData,
};

export const Primary = () => <AppData color="primary" />;
export const Secondary = () => <AppData color="secondary" />;
export const Color = () => <AppData color={color('color', '#00FF00')} />;
    