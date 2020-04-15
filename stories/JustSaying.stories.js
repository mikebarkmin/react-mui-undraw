
import React from 'react';
import { color } from '@storybook/addon-knobs';
import JustSaying from '../src/JustSaying';

export default {
  title: 'JustSaying',
  component: JustSaying,
};

export const Primary = () => <JustSaying color="primary" />;
export const Secondary = () => <JustSaying color="secondary" />;
export const Color = () => <JustSaying color={color('color', '#00FF00')} />;
    