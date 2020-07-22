
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SaveToBookmarks from '../src/SaveToBookmarks';

export default {
  title: 'SaveToBookmarks',
  component: SaveToBookmarks,
};

export const Primary = () => <SaveToBookmarks color="primary" />;
export const Secondary = () => <SaveToBookmarks color="secondary" />;
export const Color = () => <SaveToBookmarks color={color('color', '#00FF00')} />;
    