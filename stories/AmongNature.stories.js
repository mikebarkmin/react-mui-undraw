
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AmongNature from '../src/AmongNature';

export default {
  title: 'AmongNature',
  component: AmongNature,
};

export const Primary = () => <AmongNature color="primary" />;
export const Secondary = () => <AmongNature color="secondary" />;
export const Color = () => <AmongNature color={color('color', '#00FF00')} />;
    