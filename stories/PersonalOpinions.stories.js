
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalOpinions from '../src/PersonalOpinions';

export default {
  title: 'PersonalOpinions',
  component: PersonalOpinions,
};

export const Primary = () => <PersonalOpinions color="primary" />;
export const Secondary = () => <PersonalOpinions color="secondary" />;
export const Color = () => <PersonalOpinions color={color('color', '#00FF00')} />;
    