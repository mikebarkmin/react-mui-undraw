
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BusinessShop from '../src/BusinessShop';

export default {
  title: 'BusinessShop',
  component: BusinessShop,
};

export const Primary = () => <BusinessShop color="primary" />;
export const Secondary = () => <BusinessShop color="secondary" />;
export const Color = () => <BusinessShop color={color('color', '#00FF00')} />;
    