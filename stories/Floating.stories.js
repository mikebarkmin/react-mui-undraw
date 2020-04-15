
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Floating from '../src/Floating';

export default {
  title: 'Floating',
  component: Floating,
};

export const Primary = () => <Floating color="primary" />;
export const Secondary = () => <Floating color="secondary" />;
export const Color = () => <Floating color={color('color', '#00FF00')} />;
    