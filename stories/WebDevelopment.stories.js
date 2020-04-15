
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WebDevelopment from '../src/WebDevelopment';

export default {
  title: 'WebDevelopment',
  component: WebDevelopment,
};

export const Primary = () => <WebDevelopment color="primary" />;
export const Secondary = () => <WebDevelopment color="secondary" />;
export const Color = () => <WebDevelopment color={color('color', '#00FF00')} />;
    