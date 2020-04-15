
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Escaping from '../src/Escaping';

export default {
  title: 'Escaping',
  component: Escaping,
};

export const Primary = () => <Escaping color="primary" />;
export const Secondary = () => <Escaping color="secondary" />;
export const Color = () => <Escaping color={color('color', '#00FF00')} />;
    