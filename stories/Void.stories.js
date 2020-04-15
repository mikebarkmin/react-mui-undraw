
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Void from '../src/Void';

export default {
  title: 'Void',
  component: Void,
};

export const Primary = () => <Void color="primary" />;
export const Secondary = () => <Void color="secondary" />;
export const Color = () => <Void color={color('color', '#00FF00')} />;
    