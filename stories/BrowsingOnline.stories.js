
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BrowsingOnline from '../src/BrowsingOnline';

export default {
  title: 'BrowsingOnline',
  component: BrowsingOnline,
};

export const Primary = () => <BrowsingOnline color="primary" />;
export const Secondary = () => <BrowsingOnline color="secondary" />;
export const Color = () => <BrowsingOnline color={color('color', '#00FF00')} />;
    