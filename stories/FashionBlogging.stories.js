
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FashionBlogging from '../src/FashionBlogging';

export default {
  title: 'FashionBlogging',
  component: FashionBlogging,
};

export const Primary = () => <FashionBlogging color="primary" />;
export const Secondary = () => <FashionBlogging color="secondary" />;
export const Color = () => <FashionBlogging color={color('color', '#00FF00')} />;
    