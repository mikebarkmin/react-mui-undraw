
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Businessman from '../src/Businessman';

export default {
  title: 'Businessman',
  component: Businessman,
};

export const Primary = () => <Businessman color="primary" />;
export const Secondary = () => <Businessman color="secondary" />;
export const Color = () => <Businessman color={color('color', '#00FF00')} />;
    