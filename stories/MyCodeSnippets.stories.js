
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MyCodeSnippets from '../src/MyCodeSnippets';

export default {
  title: 'MyCodeSnippets',
  component: MyCodeSnippets,
};

export const Primary = () => <MyCodeSnippets color="primary" />;
export const Secondary = () => <MyCodeSnippets color="secondary" />;
export const Color = () => <MyCodeSnippets color={color('color', '#00FF00')} />;
    