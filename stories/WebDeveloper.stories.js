
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WebDeveloper from '../src/WebDeveloper';

export default {
  title: 'WebDeveloper',
  component: WebDeveloper,
};

export const Primary = () => <WebDeveloper color="primary" />;
export const Secondary = () => <WebDeveloper color="secondary" />;
export const Color = () => <WebDeveloper color={color('color', '#00FF00')} />;
    