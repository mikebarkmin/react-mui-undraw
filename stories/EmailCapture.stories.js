
import React from 'react';
import { color } from '@storybook/addon-knobs';
import EmailCapture from '../src/EmailCapture';

export default {
  title: 'EmailCapture',
  component: EmailCapture,
};

export const Primary = () => <EmailCapture color="primary" />;
export const Secondary = () => <EmailCapture color="secondary" />;
export const Color = () => <EmailCapture color={color('color', '#00FF00')} />;
    