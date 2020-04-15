
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Newspaper from '../src/Newspaper';

export default {
  title: 'Newspaper',
  component: Newspaper,
};

export const Primary = () => <Newspaper color="primary" />;
export const Secondary = () => <Newspaper color="secondary" />;
export const Color = () => <Newspaper color={color('color', '#00FF00')} />;
    