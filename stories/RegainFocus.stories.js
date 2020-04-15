
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RegainFocus from '../src/RegainFocus';

export default {
  title: 'RegainFocus',
  component: RegainFocus,
};

export const Primary = () => <RegainFocus color="primary" />;
export const Secondary = () => <RegainFocus color="secondary" />;
export const Color = () => <RegainFocus color={color('color', '#00FF00')} />;
    