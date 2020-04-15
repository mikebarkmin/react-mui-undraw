
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalDocuments from '../src/PersonalDocuments';

export default {
  title: 'PersonalDocuments',
  component: PersonalDocuments,
};

export const Primary = () => <PersonalDocuments color="primary" />;
export const Secondary = () => <PersonalDocuments color="secondary" />;
export const Color = () => <PersonalDocuments color={color('color', '#00FF00')} />;
    