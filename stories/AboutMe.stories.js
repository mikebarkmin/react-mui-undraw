
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AboutMe from '../src/AboutMe';

export default {
  title: 'AboutMe',
  component: AboutMe,
};

export const Primary = () => <AboutMe color="primary" />;
export const Secondary = () => <AboutMe color="secondary" />;
export const Color = () => <AboutMe color={color('color', '#00FF00')} />;
    