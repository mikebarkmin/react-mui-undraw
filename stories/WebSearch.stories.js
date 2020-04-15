
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WebSearch from '../src/WebSearch';

export default {
  title: 'WebSearch',
  component: WebSearch,
};

export const Primary = () => <WebSearch color="primary" />;
export const Secondary = () => <WebSearch color="secondary" />;
export const Color = () => <WebSearch color={color('color', '#00FF00')} />;
    