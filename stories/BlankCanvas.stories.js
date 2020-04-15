
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BlankCanvas from '../src/BlankCanvas';

export default {
  title: 'BlankCanvas',
  component: BlankCanvas,
};

export const Primary = () => <BlankCanvas color="primary" />;
export const Secondary = () => <BlankCanvas color="secondary" />;
export const Color = () => <BlankCanvas color={color('color', '#00FF00')} />;
    