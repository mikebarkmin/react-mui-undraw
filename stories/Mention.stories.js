
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Mention from '../src/Mention';

export default {
  title: 'Mention',
  component: Mention,
};

export const Primary = () => <Mention color="primary" />;
export const Secondary = () => <Mention color="secondary" />;
export const Color = () => <Mention color={color('color', '#00FF00')} />;
    