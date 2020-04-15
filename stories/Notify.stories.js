
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Notify from '../src/Notify';

export default {
  title: 'Notify',
  component: Notify,
};

export const Primary = () => <Notify color="primary" />;
export const Secondary = () => <Notify color="secondary" />;
export const Color = () => <Notify color={color('color', '#00FF00')} />;
    