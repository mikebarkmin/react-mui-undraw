
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Choice from '../src/Choice';

export default {
  title: 'Choice',
  component: Choice,
};

export const Primary = () => <Choice color="primary" />;
export const Secondary = () => <Choice color="secondary" />;
export const Color = () => <Choice color={color('color', '#00FF00')} />;
    