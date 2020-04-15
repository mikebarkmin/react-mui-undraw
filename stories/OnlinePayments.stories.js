
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlinePayments from '../src/OnlinePayments';

export default {
  title: 'OnlinePayments',
  component: OnlinePayments,
};

export const Primary = () => <OnlinePayments color="primary" />;
export const Secondary = () => <OnlinePayments color="secondary" />;
export const Color = () => <OnlinePayments color={color('color', '#00FF00')} />;
    