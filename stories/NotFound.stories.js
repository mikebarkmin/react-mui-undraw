
import React from 'react';
import { color } from '@storybook/addon-knobs';
import NotFound from '../src/NotFound';

export default {
  title: 'NotFound',
  component: NotFound,
};

export const Primary = () => <NotFound color="primary" />;
export const Secondary = () => <NotFound color="secondary" />;
export const Color = () => <NotFound color={color('color', '#00FF00')} />;
    