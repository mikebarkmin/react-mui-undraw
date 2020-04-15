
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Notebook from '../src/Notebook';

export default {
  title: 'Notebook',
  component: Notebook,
};

export const Primary = () => <Notebook color="primary" />;
export const Secondary = () => <Notebook color="secondary" />;
export const Color = () => <Notebook color={color('color', '#00FF00')} />;
    