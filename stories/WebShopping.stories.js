
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WebShopping from '../src/WebShopping';

export default {
  title: 'WebShopping',
  component: WebShopping,
};

export const Primary = () => <WebShopping color="primary" />;
export const Secondary = () => <WebShopping color="secondary" />;
export const Color = () => <WebShopping color={color('color', '#00FF00')} />;
    