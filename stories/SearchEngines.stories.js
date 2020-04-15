
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SearchEngines from '../src/SearchEngines';

export default {
  title: 'SearchEngines',
  component: SearchEngines,
};

export const Primary = () => <SearchEngines color="primary" />;
export const Secondary = () => <SearchEngines color="secondary" />;
export const Color = () => <SearchEngines color={color('color', '#00FF00')} />;
    