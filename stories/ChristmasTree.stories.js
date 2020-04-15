
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ChristmasTree from '../src/ChristmasTree';

export default {
  title: 'ChristmasTree',
  component: ChristmasTree,
};

export const Primary = () => <ChristmasTree color="primary" />;
export const Secondary = () => <ChristmasTree color="secondary" />;
export const Color = () => <ChristmasTree color={color('color', '#00FF00')} />;
    