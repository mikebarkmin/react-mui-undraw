
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SmartResize from '../src/SmartResize';

export default {
  title: 'SmartResize',
  component: SmartResize,
};

export const Primary = () => <SmartResize color="primary" />;
export const Secondary = () => <SmartResize color="secondary" />;
export const Color = () => <SmartResize color={color('color', '#00FF00')} />;
    