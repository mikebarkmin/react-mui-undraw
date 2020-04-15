
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Grandma from '../src/Grandma';

export default {
  title: 'Grandma',
  component: Grandma,
};

export const Primary = () => <Grandma color="primary" />;
export const Secondary = () => <Grandma color="secondary" />;
export const Color = () => <Grandma color={color('color', '#00FF00')} />;
    