
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BuildYourHome from '../src/BuildYourHome';

export default {
  title: 'BuildYourHome',
  component: BuildYourHome,
};

export const Primary = () => <BuildYourHome color="primary" />;
export const Secondary = () => <BuildYourHome color="secondary" />;
export const Color = () => <BuildYourHome color={color('color', '#00FF00')} />;
    