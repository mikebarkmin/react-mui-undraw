
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AddDocument from '../src/AddDocument';

export default {
  title: 'AddDocument',
  component: AddDocument,
};

export const Primary = () => <AddDocument color="primary" />;
export const Secondary = () => <AddDocument color="secondary" />;
export const Color = () => <AddDocument color={color('color', '#00FF00')} />;
    