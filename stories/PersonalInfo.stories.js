
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalInfo from '../src/PersonalInfo';

export default {
  title: 'PersonalInfo',
  component: PersonalInfo,
};

export const Primary = () => <PersonalInfo color="primary" />;
export const Secondary = () => <PersonalInfo color="secondary" />;
export const Color = () => <PersonalInfo color={color('color', '#00FF00')} />;
    