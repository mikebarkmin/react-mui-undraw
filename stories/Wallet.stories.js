
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Wallet from '../src/Wallet';

export default {
  title: 'Wallet',
  component: Wallet,
};

export const Primary = () => <Wallet color="primary" />;
export const Secondary = () => <Wallet color="secondary" />;
export const Color = () => <Wallet color={color('color', '#00FF00')} />;
    