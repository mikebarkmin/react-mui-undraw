
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BearMarket from '../src/BearMarket';

export default {
  title: 'BearMarket',
  component: BearMarket,
};

export const Primary = () => <BearMarket color="primary" />;
export const Secondary = () => <BearMarket color="secondary" />;
export const Color = () => <BearMarket color={color('color', '#00FF00')} />;
    