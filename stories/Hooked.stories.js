
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Hooked from '../src/Hooked';

export default {
  title: 'Hooked',
  component: Hooked,
};

export const Primary = () => <Hooked color="primary" />;
export const Secondary = () => <Hooked color="secondary" />;
export const Color = () => <Hooked color={color('color', '#00FF00')} />;
    