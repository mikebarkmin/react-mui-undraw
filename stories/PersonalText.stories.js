
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalText from '../src/PersonalText';

export default {
  title: 'PersonalText',
  component: PersonalText,
};

export const Primary = () => <PersonalText color="primary" />;
export const Secondary = () => <PersonalText color="secondary" />;
export const Color = () => <PersonalText color={color('color', '#00FF00')} />;
    