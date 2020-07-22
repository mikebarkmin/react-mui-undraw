
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WorkFromAnywhere from '../src/WorkFromAnywhere';

export default {
  title: 'WorkFromAnywhere',
  component: WorkFromAnywhere,
};

export const Primary = () => <WorkFromAnywhere color="primary" />;
export const Secondary = () => <WorkFromAnywhere color="secondary" />;
export const Color = () => <WorkFromAnywhere color={color('color', '#00FF00')} />;
    