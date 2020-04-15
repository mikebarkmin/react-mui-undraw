
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Exams from '../src/Exams';

export default {
  title: 'Exams',
  component: Exams,
};

export const Primary = () => <Exams color="primary" />;
export const Secondary = () => <Exams color="secondary" />;
export const Color = () => <Exams color={color('color', '#00FF00')} />;
    