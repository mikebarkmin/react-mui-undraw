
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WorkTime from '../src/WorkTime';

export default {
  title: 'WorkTime',
  component: WorkTime,
};

export const Primary = () => <WorkTime color="primary" />;
export const Secondary = () => <WorkTime color="secondary" />;
export const Color = () => <WorkTime color={color('color', '#00FF00')} />;
    