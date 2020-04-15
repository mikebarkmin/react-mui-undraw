
import React from 'react';
import { color } from '@storybook/addon-knobs';
import JobHunt from '../src/JobHunt';

export default {
  title: 'JobHunt',
  component: JobHunt,
};

export const Primary = () => <JobHunt color="primary" />;
export const Secondary = () => <JobHunt color="secondary" />;
export const Color = () => <JobHunt color={color('color', '#00FF00')} />;
    