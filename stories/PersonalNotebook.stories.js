
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalNotebook from '../src/PersonalNotebook';

export default {
  title: 'PersonalNotebook',
  component: PersonalNotebook,
};

export const Primary = () => <PersonalNotebook color="primary" />;
export const Secondary = () => <PersonalNotebook color="secondary" />;
export const Color = () => <PersonalNotebook color={color('color', '#00FF00')} />;
    