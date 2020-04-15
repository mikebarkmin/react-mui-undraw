
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Forever from '../src/Forever';

export default {
  title: 'Forever',
  component: Forever,
};

export const Primary = () => <Forever color="primary" />;
export const Secondary = () => <Forever color="secondary" />;
export const Color = () => <Forever color={color('color', '#00FF00')} />;
    