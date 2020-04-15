
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FormingIdeas from '../src/FormingIdeas';

export default {
  title: 'FormingIdeas',
  component: FormingIdeas,
};

export const Primary = () => <FormingIdeas color="primary" />;
export const Secondary = () => <FormingIdeas color="secondary" />;
export const Color = () => <FormingIdeas color={color('color', '#00FF00')} />;
    