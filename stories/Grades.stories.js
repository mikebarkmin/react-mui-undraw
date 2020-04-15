
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Grades from '../src/Grades';

export default {
  title: 'Grades',
  component: Grades,
};

export const Primary = () => <Grades color="primary" />;
export const Secondary = () => <Grades color="secondary" />;
export const Color = () => <Grades color={color('color', '#00FF00')} />;
    