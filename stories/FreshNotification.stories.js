
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FreshNotification from '../src/FreshNotification';

export default {
  title: 'FreshNotification',
  component: FreshNotification,
};

export const Primary = () => <FreshNotification color="primary" />;
export const Secondary = () => <FreshNotification color="secondary" />;
export const Color = () => <FreshNotification color={color('color', '#00FF00')} />;
    