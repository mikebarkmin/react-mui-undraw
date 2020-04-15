
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CreditCardPayment from '../src/CreditCardPayment';

export default {
  title: 'CreditCardPayment',
  component: CreditCardPayment,
};

export const Primary = () => <CreditCardPayment color="primary" />;
export const Secondary = () => <CreditCardPayment color="secondary" />;
export const Color = () => <CreditCardPayment color={color('color', '#00FF00')} />;
    