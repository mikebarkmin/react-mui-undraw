
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileLogin from '../src/MobileLogin';

export default {
  title: 'MobileLogin',
  component: MobileLogin,
};

export const Primary = () => <MobileLogin color="primary" />;
export const Secondary = () => <MobileLogin color="secondary" />;
export const Color = () => <MobileLogin color={color('color', '#00FF00')} />;
    