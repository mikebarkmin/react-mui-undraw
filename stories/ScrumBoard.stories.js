
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ScrumBoard from '../src/ScrumBoard';

export default {
  title: 'ScrumBoard',
  component: ScrumBoard,
};

export const Primary = () => <ScrumBoard color="primary" />;
export const Secondary = () => <ScrumBoard color="secondary" />;
export const Color = () => <ScrumBoard color={color('color', '#00FF00')} />;
    