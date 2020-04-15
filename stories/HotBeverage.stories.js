
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HotBeverage from '../src/HotBeverage';

export default {
  title: 'HotBeverage',
  component: HotBeverage,
};

export const Primary = () => <HotBeverage color="primary" />;
export const Secondary = () => <HotBeverage color="secondary" />;
export const Color = () => <HotBeverage color={color('color', '#00FF00')} />;
    