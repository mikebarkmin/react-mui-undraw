
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Opinion from '../src/Opinion';

export default {
  title: 'Opinion',
  component: Opinion,
};

export const Primary = () => <Opinion color="primary" />;
export const Secondary = () => <Opinion color="secondary" />;
export const Color = () => <Opinion color={color('color', '#00FF00')} />;
    