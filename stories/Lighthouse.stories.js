
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Lighthouse from '../src/Lighthouse';

export default {
  title: 'Lighthouse',
  component: Lighthouse,
};

export const Primary = () => <Lighthouse color="primary" />;
export const Secondary = () => <Lighthouse color="secondary" />;
export const Color = () => <Lighthouse color={color('color', '#00FF00')} />;
    