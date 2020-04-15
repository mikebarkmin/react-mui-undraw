
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Brainstorming from '../src/Brainstorming';

export default {
  title: 'Brainstorming',
  component: Brainstorming,
};

export const Primary = () => <Brainstorming color="primary" />;
export const Secondary = () => <Brainstorming color="secondary" />;
export const Color = () => <Brainstorming color={color('color', '#00FF00')} />;
    