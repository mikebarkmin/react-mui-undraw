
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SelectOption from '../src/SelectOption';

export default {
  title: 'SelectOption',
  component: SelectOption,
};

export const Primary = () => <SelectOption color="primary" />;
export const Secondary = () => <SelectOption color="secondary" />;
export const Color = () => <SelectOption color={color('color', '#00FF00')} />;
    