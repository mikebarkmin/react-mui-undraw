
import React from 'react';
import { color } from '@storybook/addon-knobs';
import StockPrices from '../src/StockPrices';

export default {
  title: 'StockPrices',
  component: StockPrices,
};

export const Primary = () => <StockPrices color="primary" />;
export const Secondary = () => <StockPrices color="secondary" />;
export const Color = () => <StockPrices color={color('color', '#00FF00')} />;
    