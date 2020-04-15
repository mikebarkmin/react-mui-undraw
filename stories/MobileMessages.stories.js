
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileMessages from '../src/MobileMessages';

export default {
  title: 'MobileMessages',
  component: MobileMessages,
};

export const Primary = () => <MobileMessages color="primary" />;
export const Secondary = () => <MobileMessages color="secondary" />;
export const Color = () => <MobileMessages color={color('color', '#00FF00')} />;
    