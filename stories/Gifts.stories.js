
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Gifts from '../src/Gifts';

export default {
  title: 'Gifts',
  component: Gifts,
};

export const Primary = () => <Gifts color="primary" />;
export const Secondary = () => <Gifts color="secondary" />;
export const Color = () => <Gifts color={color('color', '#00FF00')} />;
    