
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalSettings from '../src/PersonalSettings';

export default {
  title: 'PersonalSettings',
  component: PersonalSettings,
};

export const Primary = () => <PersonalSettings color="primary" />;
export const Secondary = () => <PersonalSettings color="secondary" />;
export const Color = () => <PersonalSettings color={color('color', '#00FF00')} />;
    