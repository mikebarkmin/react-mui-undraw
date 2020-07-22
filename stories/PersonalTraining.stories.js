
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalTraining from '../src/PersonalTraining';

export default {
  title: 'PersonalTraining',
  component: PersonalTraining,
};

export const Primary = () => <PersonalTraining color="primary" />;
export const Secondary = () => <PersonalTraining color="secondary" />;
export const Color = () => <PersonalTraining color={color('color', '#00FF00')} />;
    