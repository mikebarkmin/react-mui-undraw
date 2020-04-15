
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SecureData from '../src/SecureData';

export default {
  title: 'SecureData',
  component: SecureData,
};

export const Primary = () => <SecureData color="primary" />;
export const Secondary = () => <SecureData color="secondary" />;
export const Color = () => <SecureData color={color('color', '#00FF00')} />;
    