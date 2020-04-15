
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Unicorn from '../src/Unicorn';

export default {
  title: 'Unicorn',
  component: Unicorn,
};

export const Primary = () => <Unicorn color="primary" />;
export const Secondary = () => <Unicorn color="secondary" />;
export const Color = () => <Unicorn color={color('color', '#00FF00')} />;
    