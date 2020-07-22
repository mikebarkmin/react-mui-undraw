
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RefreshingBeverage from '../src/RefreshingBeverage';

export default {
  title: 'RefreshingBeverage',
  component: RefreshingBeverage,
};

export const Primary = () => <RefreshingBeverage color="primary" />;
export const Secondary = () => <RefreshingBeverage color="secondary" />;
export const Color = () => <RefreshingBeverage color={color('color', '#00FF00')} />;
    