
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PersonalSite from '../src/PersonalSite';

export default {
  title: 'PersonalSite',
  component: PersonalSite,
};

export const Primary = () => <PersonalSite color="primary" />;
export const Secondary = () => <PersonalSite color="secondary" />;
export const Color = () => <PersonalSite color={color('color', '#00FF00')} />;
    