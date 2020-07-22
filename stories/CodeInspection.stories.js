
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CodeInspection from '../src/CodeInspection';

export default {
  title: 'CodeInspection',
  component: CodeInspection,
};

export const Primary = () => <CodeInspection color="primary" />;
export const Secondary = () => <CodeInspection color="secondary" />;
export const Color = () => <CodeInspection color={color('color', '#00FF00')} />;
    