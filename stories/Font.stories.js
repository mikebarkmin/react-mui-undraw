
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Font from '../src/Font';

export default {
  title: 'Font',
  component: Font,
};

export const Primary = () => <Font color="primary" />;
export const Secondary = () => <Font color="secondary" />;
export const Color = () => <Font color={color('color', '#00FF00')} />;
    