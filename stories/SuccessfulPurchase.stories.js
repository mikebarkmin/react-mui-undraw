
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SuccessfulPurchase from '../src/SuccessfulPurchase';

export default {
  title: 'SuccessfulPurchase',
  component: SuccessfulPurchase,
};

export const Primary = () => <SuccessfulPurchase color="primary" />;
export const Secondary = () => <SuccessfulPurchase color="secondary" />;
export const Color = () => <SuccessfulPurchase color={color('color', '#00FF00')} />;
    