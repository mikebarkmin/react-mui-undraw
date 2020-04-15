
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Wordpress from '../src/Wordpress';

export default {
  title: 'Wordpress',
  component: Wordpress,
};

export const Primary = () => <Wordpress color="primary" />;
export const Secondary = () => <Wordpress color="secondary" />;
export const Color = () => <Wordpress color={color('color', '#00FF00')} />;
    