
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PlayTime from '../src/PlayTime';

export default {
  title: 'PlayTime',
  component: PlayTime,
};

export const Primary = () => <PlayTime color="primary" />;
export const Secondary = () => <PlayTime color="secondary" />;
export const Color = () => <PlayTime color={color('color', '#00FF00')} />;
    