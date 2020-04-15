
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BuyHouse from '../src/BuyHouse';

export default {
  title: 'BuyHouse',
  component: BuyHouse,
};

export const Primary = () => <BuyHouse color="primary" />;
export const Secondary = () => <BuyHouse color="secondary" />;
export const Color = () => <BuyHouse color={color('color', '#00FF00')} />;
    