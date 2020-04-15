
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Completing from '../src/Completing';

export default {
  title: 'Completing',
  component: Completing,
};

export const Primary = () => <Completing color="primary" />;
export const Secondary = () => <Completing color="secondary" />;
export const Color = () => <Completing color={color('color', '#00FF00')} />;
    