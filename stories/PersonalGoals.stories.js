
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalGoals from '../src/PersonalGoals';

export default {
  title: 'PersonalGoals',
  component: PersonalGoals,
};

export const Primary = () => <PersonalGoals color="primary" />;
export const Secondary = () => <PersonalGoals color="secondary" />;
export const Color = () => <PersonalGoals color={color('color', '#00FF00')} />;
    