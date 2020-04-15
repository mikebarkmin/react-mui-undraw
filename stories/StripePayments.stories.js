
import React from 'react';
import { color } from '@storybook/addon-knobs';
import StripePayments from '../src/StripePayments';

export default {
  title: 'StripePayments',
  component: StripePayments,
};

export const Primary = () => <StripePayments color="primary" />;
export const Secondary = () => <StripePayments color="secondary" />;
export const Color = () => <StripePayments color={color('color', '#00FF00')} />;
    