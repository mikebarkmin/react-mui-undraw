
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Appreciation from '../src/Appreciation';

export default {
  title: 'Appreciation',
  component: Appreciation,
};

export const Primary = () => <Appreciation color="primary" />;
export const Secondary = () => <Appreciation color="secondary" />;
export const Color = () => <Appreciation color={color('color', '#00FF00')} />;
    