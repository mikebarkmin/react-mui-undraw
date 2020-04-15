
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Notes from '../src/Notes';

export default {
  title: 'Notes',
  component: Notes,
};

export const Primary = () => <Notes color="primary" />;
export const Secondary = () => <Notes color="secondary" />;
export const Color = () => <Notes color={color('color', '#00FF00')} />;
    