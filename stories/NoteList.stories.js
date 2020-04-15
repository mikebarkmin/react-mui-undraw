
import React from 'react';
import { color } from '@storybook/addon-knobs';
import NoteList from '../src/NoteList';

export default {
  title: 'NoteList',
  component: NoteList,
};

export const Primary = () => <NoteList color="primary" />;
export const Secondary = () => <NoteList color="secondary" />;
export const Color = () => <NoteList color={color('color', '#00FF00')} />;
    