
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TransferMoney from '../src/TransferMoney';

export default {
  title: 'TransferMoney',
  component: TransferMoney,
};

export const Primary = () => <TransferMoney color="primary" />;
export const Secondary = () => <TransferMoney color="secondary" />;
export const Color = () => <TransferMoney color={color('color', '#00FF00')} />;
    