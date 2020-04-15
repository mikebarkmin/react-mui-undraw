
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CodeThinking from '../src/CodeThinking';

export default {
  title: 'CodeThinking',
  component: CodeThinking,
};

export const Primary = () => <CodeThinking color="primary" />;
export const Secondary = () => <CodeThinking color="secondary" />;
export const Color = () => <CodeThinking color={color('color', '#00FF00')} />;
    