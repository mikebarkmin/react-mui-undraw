
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CreditCard from '../src/CreditCard';

export default {
  title: 'CreditCard',
  component: CreditCard,
};

export const Primary = () => <CreditCard color="primary" />;
export const Secondary = () => <CreditCard color="secondary" />;
export const Color = () => <CreditCard color={color('color', '#00FF00')} />;
    