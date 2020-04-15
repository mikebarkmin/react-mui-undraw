
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Together from '../src/Together';

export default {
  title: 'Together',
  component: Together,
};

export const Primary = () => <Together color="primary" />;
export const Secondary = () => <Together color="secondary" />;
export const Color = () => <Together color={color('color', '#00FF00')} />;
    