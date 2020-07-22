
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Duplicate from '../src/Duplicate';

export default {
  title: 'Duplicate',
  component: Duplicate,
};

export const Primary = () => <Duplicate color="primary" />;
export const Secondary = () => <Duplicate color="secondary" />;
export const Color = () => <Duplicate color={color('color', '#00FF00')} />;
    