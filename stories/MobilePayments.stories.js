
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobilePayments from '../src/MobilePayments';

export default {
  title: 'MobilePayments',
  component: MobilePayments,
};

export const Primary = () => <MobilePayments color="primary" />;
export const Secondary = () => <MobilePayments color="secondary" />;
export const Color = () => <MobilePayments color={color('color', '#00FF00')} />;
    