
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Hiring from '../src/Hiring';

export default {
  title: 'Hiring',
  component: Hiring,
};

export const Primary = () => <Hiring color="primary" />;
export const Secondary = () => <Hiring color="secondary" />;
export const Color = () => <Hiring color={color('color', '#00FF00')} />;
    