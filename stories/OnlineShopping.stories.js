
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineShopping from '../src/OnlineShopping';

export default {
  title: 'OnlineShopping',
  component: OnlineShopping,
};

export const Primary = () => <OnlineShopping color="primary" />;
export const Secondary = () => <OnlineShopping color="secondary" />;
export const Color = () => <OnlineShopping color={color('color', '#00FF00')} />;
    