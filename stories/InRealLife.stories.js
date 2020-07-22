
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InRealLife from '../src/InRealLife';

export default {
  title: 'InRealLife',
  component: InRealLife,
};

export const Primary = () => <InRealLife color="primary" />;
export const Secondary = () => <InRealLife color="secondary" />;
export const Color = () => <InRealLife color={color('color', '#00FF00')} />;
    