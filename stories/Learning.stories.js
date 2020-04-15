
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Learning from '../src/Learning';

export default {
  title: 'Learning',
  component: Learning,
};

export const Primary = () => <Learning color="primary" />;
export const Secondary = () => <Learning color="secondary" />;
export const Color = () => <Learning color={color('color', '#00FF00')} />;
    