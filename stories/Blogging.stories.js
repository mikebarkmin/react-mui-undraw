
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Blogging from '../src/Blogging';

export default {
  title: 'Blogging',
  component: Blogging,
};

export const Primary = () => <Blogging color="primary" />;
export const Secondary = () => <Blogging color="secondary" />;
export const Color = () => <Blogging color={color('color', '#00FF00')} />;
    