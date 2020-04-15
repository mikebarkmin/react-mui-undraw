
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Ether from '../src/Ether';

export default {
  title: 'Ether',
  component: Ether,
};

export const Primary = () => <Ether color="primary" />;
export const Secondary = () => <Ether color="secondary" />;
export const Color = () => <Ether color={color('color', '#00FF00')} />;
    