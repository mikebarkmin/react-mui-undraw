
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AskMeAnything from '../src/AskMeAnything';

export default {
  title: 'AskMeAnything',
  component: AskMeAnything,
};

export const Primary = () => <AskMeAnything color="primary" />;
export const Secondary = () => <AskMeAnything color="secondary" />;
export const Color = () => <AskMeAnything color={color('color', '#00FF00')} />;
    