
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalFile from '../src/PersonalFile';

export default {
  title: 'PersonalFile',
  component: PersonalFile,
};

export const Primary = () => <PersonalFile color="primary" />;
export const Secondary = () => <PersonalFile color="secondary" />;
export const Color = () => <PersonalFile color={color('color', '#00FF00')} />;
    