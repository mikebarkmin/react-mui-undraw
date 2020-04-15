
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BitcoinP2P from '../src/BitcoinP2P';

export default {
  title: 'BitcoinP2P',
  component: BitcoinP2P,
};

export const Primary = () => <BitcoinP2P color="primary" />;
export const Secondary = () => <BitcoinP2P color="secondary" />;
export const Color = () => <BitcoinP2P color={color('color', '#00FF00')} />;
    