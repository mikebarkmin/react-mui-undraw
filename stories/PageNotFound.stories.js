
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PageNotFound from '../src/PageNotFound';

export default {
  title: 'PageNotFound',
  component: PageNotFound,
};

export const Primary = () => <PageNotFound color="primary" />;
export const Secondary = () => <PageNotFound color="secondary" />;
export const Color = () => <PageNotFound color={color('color', '#00FF00')} />;
    