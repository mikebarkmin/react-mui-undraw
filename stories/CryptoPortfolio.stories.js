
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CryptoPortfolio from '../src/CryptoPortfolio';

export default {
  title: 'CryptoPortfolio',
  component: CryptoPortfolio,
};

export const Primary = () => <CryptoPortfolio color="primary" />;
export const Secondary = () => <CryptoPortfolio color="secondary" />;
export const Color = () => <CryptoPortfolio color={color('color', '#00FF00')} />;
    