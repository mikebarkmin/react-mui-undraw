
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ShortBio from '../src/ShortBio';

export default {
  title: 'ShortBio',
  component: ShortBio,
};

export const Primary = () => <ShortBio color="primary" />;
export const Secondary = () => <ShortBio color="secondary" />;
export const Color = () => <ShortBio color={color('color', '#00FF00')} />;
    