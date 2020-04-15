
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DigitalCurrency from '../src/DigitalCurrency';

export default {
  title: 'DigitalCurrency',
  component: DigitalCurrency,
};

export const Primary = () => <DigitalCurrency color="primary" />;
export const Secondary = () => <DigitalCurrency color="secondary" />;
export const Color = () => <DigitalCurrency color={color('color', '#00FF00')} />;
    