
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Buffer from '../src/Buffer';

export default {
  title: 'Buffer',
  component: Buffer,
};

export const Primary = () => <Buffer color="primary" />;
export const Secondary = () => <Buffer color="secondary" />;
export const Color = () => <Buffer color={color('color', '#00FF00')} />;
    