
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalWebsite from '../src/PersonalWebsite';

export default {
  title: 'PersonalWebsite',
  component: PersonalWebsite,
};

export const Primary = () => <PersonalWebsite color="primary" />;
export const Secondary = () => <PersonalWebsite color="secondary" />;
export const Color = () => <PersonalWebsite color={color('color', '#00FF00')} />;
    