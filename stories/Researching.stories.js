
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Researching from '../src/Researching';

export default {
  title: 'Researching',
  component: Researching,
};

export const Primary = () => <Researching color="primary" />;
export const Secondary = () => <Researching color="secondary" />;
export const Color = () => <Researching color={color('color', '#00FF00')} />;
    