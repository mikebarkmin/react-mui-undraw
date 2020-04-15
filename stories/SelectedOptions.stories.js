
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SelectedOptions from '../src/SelectedOptions';

export default {
  title: 'SelectedOptions',
  component: SelectedOptions,
};

export const Primary = () => <SelectedOptions color="primary" />;
export const Secondary = () => <SelectedOptions color="secondary" />;
export const Color = () => <SelectedOptions color={color('color', '#00FF00')} />;
    