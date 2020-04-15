
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalData from '../src/PersonalData';

export default {
  title: 'PersonalData',
  component: PersonalData,
};

export const Primary = () => <PersonalData color="primary" />;
export const Secondary = () => <PersonalData color="secondary" />;
export const Color = () => <PersonalData color={color('color', '#00FF00')} />;
    