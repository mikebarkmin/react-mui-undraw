
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AccessDenied from '../src/AccessDenied';

export default {
  title: 'AccessDenied',
  component: AccessDenied,
};

export const Primary = () => <AccessDenied color="primary" />;
export const Secondary = () => <AccessDenied color="secondary" />;
export const Color = () => <AccessDenied color={color('color', '#00FF00')} />;
    