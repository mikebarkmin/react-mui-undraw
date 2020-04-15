
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ThoughtProcess from '../src/ThoughtProcess';

export default {
  title: 'ThoughtProcess',
  component: ThoughtProcess,
};

export const Primary = () => <ThoughtProcess color="primary" />;
export const Secondary = () => <ThoughtProcess color="secondary" />;
export const Color = () => <ThoughtProcess color={color('color', '#00FF00')} />;
    