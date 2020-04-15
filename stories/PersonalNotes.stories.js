
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalNotes from '../src/PersonalNotes';

export default {
  title: 'PersonalNotes',
  component: PersonalNotes,
};

export const Primary = () => <PersonalNotes color="primary" />;
export const Secondary = () => <PersonalNotes color="secondary" />;
export const Color = () => <PersonalNotes color={color('color', '#00FF00')} />;
    