
import React from 'react';
import { color } from '@storybook/addon-knobs';
import NewIdeas from '../src/NewIdeas';

export default {
  title: 'NewIdeas',
  component: NewIdeas,
};

export const Primary = () => <NewIdeas color="primary" />;
export const Secondary = () => <NewIdeas color="secondary" />;
export const Color = () => <NewIdeas color={color('color', '#00FF00')} />;
    