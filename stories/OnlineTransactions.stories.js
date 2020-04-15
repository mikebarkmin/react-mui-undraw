
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineTransactions from '../src/OnlineTransactions';

export default {
  title: 'OnlineTransactions',
  component: OnlineTransactions,
};

export const Primary = () => <OnlineTransactions color="primary" />;
export const Secondary = () => <OnlineTransactions color="secondary" />;
export const Color = () => <OnlineTransactions color={color('color', '#00FF00')} />;
    