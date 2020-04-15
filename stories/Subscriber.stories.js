
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Subscriber from '../src/Subscriber';

export default {
  title: 'Subscriber',
  component: Subscriber,
};

export const Primary = () => <Subscriber color="primary" />;
export const Secondary = () => <Subscriber color="secondary" />;
export const Color = () => <Subscriber color={color('color', '#00FF00')} />;
    