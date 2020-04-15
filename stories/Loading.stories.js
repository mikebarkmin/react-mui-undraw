
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Loading from '../src/Loading';

export default {
  title: 'Loading',
  component: Loading,
};

export const Primary = () => <Loading color="primary" />;
export const Secondary = () => <Loading color="secondary" />;
export const Color = () => <Loading color={color('color', '#00FF00')} />;
    