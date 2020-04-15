
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Done from '../src/Done';

export default {
  title: 'Done',
  component: Done,
};

export const Primary = () => <Done color="primary" />;
export const Secondary = () => <Done color="secondary" />;
export const Color = () => <Done color={color('color', '#00FF00')} />;
    