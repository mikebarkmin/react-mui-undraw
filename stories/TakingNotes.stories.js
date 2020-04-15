
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TakingNotes from '../src/TakingNotes';

export default {
  title: 'TakingNotes',
  component: TakingNotes,
};

export const Primary = () => <TakingNotes color="primary" />;
export const Secondary = () => <TakingNotes color="secondary" />;
export const Color = () => <TakingNotes color={color('color', '#00FF00')} />;
    