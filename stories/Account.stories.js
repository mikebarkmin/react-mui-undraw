
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Account from '../src/Account';

export default {
  title: 'Account',
  component: Account,
};

export const Primary = () => <Account color="primary" />;
export const Secondary = () => <Account color="secondary" />;
export const Color = () => <Account color={color('color', '#00FF00')} />;
    