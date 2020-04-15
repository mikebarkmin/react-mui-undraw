
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Ethereum from '../src/Ethereum';

export default {
  title: 'Ethereum',
  component: Ethereum,
};

export const Primary = () => <Ethereum color="primary" />;
export const Secondary = () => <Ethereum color="secondary" />;
export const Color = () => <Ethereum color={color('color', '#00FF00')} />;
    