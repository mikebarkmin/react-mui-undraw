
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GoneShopping from '../src/GoneShopping';

export default {
  title: 'GoneShopping',
  component: GoneShopping,
};

export const Primary = () => <GoneShopping color="primary" />;
export const Secondary = () => <GoneShopping color="secondary" />;
export const Color = () => <GoneShopping color={color('color', '#00FF00')} />;
    