
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Hire from '../src/Hire';

export default {
  title: 'Hire',
  component: Hire,
};

export const Primary = () => <Hire color="primary" />;
export const Secondary = () => <Hire color="secondary" />;
export const Color = () => <Hire color={color('color', '#00FF00')} />;
    