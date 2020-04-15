
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobilePay from '../src/MobilePay';

export default {
  title: 'MobilePay',
  component: MobilePay,
};

export const Primary = () => <MobilePay color="primary" />;
export const Secondary = () => <MobilePay color="secondary" />;
export const Color = () => <MobilePay color={color('color', '#00FF00')} />;
    