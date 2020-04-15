
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Specs from '../src/Specs';

export default {
  title: 'Specs',
  component: Specs,
};

export const Primary = () => <Specs color="primary" />;
export const Secondary = () => <Specs color="secondary" />;
export const Color = () => <Specs color={color('color', '#00FF00')} />;
    