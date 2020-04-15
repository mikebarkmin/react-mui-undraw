
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PlainCreditCard from '../src/PlainCreditCard';

export default {
  title: 'PlainCreditCard',
  component: PlainCreditCard,
};

export const Primary = () => <PlainCreditCard color="primary" />;
export const Secondary = () => <PlainCreditCard color="secondary" />;
export const Color = () => <PlainCreditCard color={color('color', '#00FF00')} />;
    