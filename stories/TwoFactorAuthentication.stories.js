
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TwoFactorAuthentication from '../src/TwoFactorAuthentication';

export default {
  title: 'TwoFactorAuthentication',
  component: TwoFactorAuthentication,
};

export const Primary = () => <TwoFactorAuthentication color="primary" />;
export const Secondary = () => <TwoFactorAuthentication color="secondary" />;
export const Color = () => <TwoFactorAuthentication color={color('color', '#00FF00')} />;
    