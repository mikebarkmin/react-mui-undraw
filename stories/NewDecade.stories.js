
import React from 'react';
import { color } from '@storybook/addon-knobs';
import NewDecade from '../src/NewDecade';

export default {
  title: 'NewDecade',
  component: NewDecade,
};

export const Primary = () => <NewDecade color="primary" />;
export const Secondary = () => <NewDecade color="secondary" />;
export const Color = () => <NewDecade color={color('color', '#00FF00')} />;
    