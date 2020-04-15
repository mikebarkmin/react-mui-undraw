
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AddFile from '../src/AddFile';

export default {
  title: 'AddFile',
  component: AddFile,
};

export const Primary = () => <AddFile color="primary" />;
export const Secondary = () => <AddFile color="secondary" />;
export const Color = () => <AddFile color={color('color', '#00FF00')} />;
    