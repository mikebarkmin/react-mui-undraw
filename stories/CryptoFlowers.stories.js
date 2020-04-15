
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CryptoFlowers from '../src/CryptoFlowers';

export default {
  title: 'CryptoFlowers',
  component: CryptoFlowers,
};

export const Primary = () => <CryptoFlowers color="primary" />;
export const Secondary = () => <CryptoFlowers color="secondary" />;
export const Color = () => <CryptoFlowers color={color('color', '#00FF00')} />;
    