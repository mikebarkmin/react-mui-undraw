
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CreditCardPayments from '../src/CreditCardPayments';

export default {
  title: 'CreditCardPayments',
  component: CreditCardPayments,
};

export const Primary = () => <CreditCardPayments color="primary" />;
export const Secondary = () => <CreditCardPayments color="secondary" />;
export const Color = () => <CreditCardPayments color={color('color', '#00FF00')} />;
    