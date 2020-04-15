
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CountrySide from '../src/CountrySide';

export default {
  title: 'CountrySide',
  component: CountrySide,
};

export const Primary = () => <CountrySide color="primary" />;
export const Secondary = () => <CountrySide color="secondary" />;
export const Color = () => <CountrySide color={color('color', '#00FF00')} />;
    