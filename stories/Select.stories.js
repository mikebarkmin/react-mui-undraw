
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Select from '../src/Select';

export default {
  title: 'Select',
  component: Select,
};

export const Primary = () => <Select color="primary" />;
export const Secondary = () => <Select color="secondary" />;
export const Color = () => <Select color={color('color', '#00FF00')} />;
    