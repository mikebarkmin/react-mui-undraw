
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AddFiles from '../src/AddFiles';

export default {
  title: 'AddFiles',
  component: AddFiles,
};

export const Primary = () => <AddFiles color="primary" />;
export const Secondary = () => <AddFiles color="secondary" />;
export const Color = () => <AddFiles color={color('color', '#00FF00')} />;
    