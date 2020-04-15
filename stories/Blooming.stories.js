
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Blooming from '../src/Blooming';

export default {
  title: 'Blooming',
  component: Blooming,
};

export const Primary = () => <Blooming color="primary" />;
export const Secondary = () => <Blooming color="secondary" />;
export const Color = () => <Blooming color={color('color', '#00FF00')} />;
    