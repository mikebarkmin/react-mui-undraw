
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SecureServer from '../src/SecureServer';

export default {
  title: 'SecureServer',
  component: SecureServer,
};

export const Primary = () => <SecureServer color="primary" />;
export const Secondary = () => <SecureServer color="secondary" />;
export const Color = () => <SecureServer color={color('color', '#00FF00')} />;
    