
import React from 'react';
import { color } from '@storybook/addon-knobs';
import EmptyCart from '../src/EmptyCart';

export default {
  title: 'EmptyCart',
  component: EmptyCart,
};

export const Primary = () => <EmptyCart color="primary" />;
export const Secondary = () => <EmptyCart color="secondary" />;
export const Color = () => <EmptyCart color={color('color', '#00FF00')} />;
    