
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AboutUsPage from '../src/AboutUsPage';

export default {
  title: 'AboutUsPage',
  component: AboutUsPage,
};

export const Primary = () => <AboutUsPage color="primary" />;
export const Secondary = () => <AboutUsPage color="secondary" />;
export const Color = () => <AboutUsPage color={color('color', '#00FF00')} />;
    