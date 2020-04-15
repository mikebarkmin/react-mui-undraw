
import React from 'react';
import { color } from '@storybook/addon-knobs';
import NewEntries from '../src/NewEntries';

export default {
  title: 'NewEntries',
  component: NewEntries,
};

export const Primary = () => <NewEntries color="primary" />;
export const Secondary = () => <NewEntries color="secondary" />;
export const Color = () => <NewEntries color={color('color', '#00FF00')} />;
    