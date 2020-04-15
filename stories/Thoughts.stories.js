
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Thoughts from '../src/Thoughts';

export default {
  title: 'Thoughts',
  component: Thoughts,
};

export const Primary = () => <Thoughts color="primary" />;
export const Secondary = () => <Thoughts color="secondary" />;
export const Color = () => <Thoughts color={color('color', '#00FF00')} />;
    