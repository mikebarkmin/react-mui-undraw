
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Launching from '../src/Launching';

export default {
  title: 'Launching',
  component: Launching,
};

export const Primary = () => <Launching color="primary" />;
export const Secondary = () => <Launching color="secondary" />;
export const Color = () => <Launching color={color('color', '#00FF00')} />;
    