
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalTrainer from '../src/PersonalTrainer';

export default {
  title: 'PersonalTrainer',
  component: PersonalTrainer,
};

export const Primary = () => <PersonalTrainer color="primary" />;
export const Secondary = () => <PersonalTrainer color="secondary" />;
export const Color = () => <PersonalTrainer color={color('color', '#00FF00')} />;
    