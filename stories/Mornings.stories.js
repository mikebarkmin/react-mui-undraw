
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Mornings from '../src/Mornings';

export default {
  title: 'Mornings',
  component: Mornings,
};

export const Primary = () => <Mornings color="primary" />;
export const Secondary = () => <Mornings color="secondary" />;
export const Color = () => <Mornings color={color('color', '#00FF00')} />;
    