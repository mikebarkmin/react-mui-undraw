
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Resume from '../src/Resume';

export default {
  title: 'Resume',
  component: Resume,
};

export const Primary = () => <Resume color="primary" />;
export const Secondary = () => <Resume color="secondary" />;
export const Color = () => <Resume color={color('color', '#00FF00')} />;
    