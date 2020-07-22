
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WorkingFromAnywhere from '../src/WorkingFromAnywhere';

export default {
  title: 'WorkingFromAnywhere',
  component: WorkingFromAnywhere,
};

export const Primary = () => <WorkingFromAnywhere color="primary" />;
export const Secondary = () => <WorkingFromAnywhere color="secondary" />;
export const Color = () => <WorkingFromAnywhere color={color('color', '#00FF00')} />;
    