
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Emails from '../src/Emails';

export default {
  title: 'Emails',
  component: Emails,
};

export const Primary = () => <Emails color="primary" />;
export const Secondary = () => <Emails color="secondary" />;
export const Color = () => <Emails color={color('color', '#00FF00')} />;
    