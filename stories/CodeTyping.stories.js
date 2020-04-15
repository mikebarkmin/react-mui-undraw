
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CodeTyping from '../src/CodeTyping';

export default {
  title: 'CodeTyping',
  component: CodeTyping,
};

export const Primary = () => <CodeTyping color="primary" />;
export const Secondary = () => <CodeTyping color="secondary" />;
export const Color = () => <CodeTyping color={color('color', '#00FF00')} />;
    