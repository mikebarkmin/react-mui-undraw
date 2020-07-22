
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalEmail from '../src/PersonalEmail';

export default {
  title: 'PersonalEmail',
  component: PersonalEmail,
};

export const Primary = () => <PersonalEmail color="primary" />;
export const Secondary = () => <PersonalEmail color="secondary" />;
export const Color = () => <PersonalEmail color={color('color', '#00FF00')} />;
    