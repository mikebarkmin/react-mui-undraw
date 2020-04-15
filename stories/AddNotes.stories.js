
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AddNotes from '../src/AddNotes';

export default {
  title: 'AddNotes',
  component: AddNotes,
};

export const Primary = () => <AddNotes color="primary" />;
export const Secondary = () => <AddNotes color="secondary" />;
export const Color = () => <AddNotes color={color('color', '#00FF00')} />;
    