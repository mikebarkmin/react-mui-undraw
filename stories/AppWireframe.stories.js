
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AppWireframe from '../src/AppWireframe';

export default {
  title: 'AppWireframe',
  component: AppWireframe,
};

export const Primary = () => <AppWireframe color="primary" />;
export const Secondary = () => <AppWireframe color="secondary" />;
export const Color = () => <AppWireframe color={color('color', '#00FF00')} />;
    