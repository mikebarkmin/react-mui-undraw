
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Programmer from '../src/Programmer';

export default {
  title: 'Programmer',
  component: Programmer,
};

export const Primary = () => <Programmer color="primary" />;
export const Secondary = () => <Programmer color="secondary" />;
export const Color = () => <Programmer color={color('color', '#00FF00')} />;
    