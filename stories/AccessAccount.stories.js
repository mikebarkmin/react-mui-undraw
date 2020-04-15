
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AccessAccount from '../src/AccessAccount';

export default {
  title: 'AccessAccount',
  component: AccessAccount,
};

export const Primary = () => <AccessAccount color="primary" />;
export const Secondary = () => <AccessAccount color="secondary" />;
export const Color = () => <AccessAccount color={color('color', '#00FF00')} />;
    