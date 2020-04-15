
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Noted from '../src/Noted';

export default {
  title: 'Noted',
  component: Noted,
};

export const Primary = () => <Noted color="primary" />;
export const Secondary = () => <Noted color="secondary" />;
export const Color = () => <Noted color={color('color', '#00FF00')} />;
    