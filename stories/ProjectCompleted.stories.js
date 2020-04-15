
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProjectCompleted from '../src/ProjectCompleted';

export default {
  title: 'ProjectCompleted',
  component: ProjectCompleted,
};

export const Primary = () => <ProjectCompleted color="primary" />;
export const Secondary = () => <ProjectCompleted color="secondary" />;
export const Color = () => <ProjectCompleted color={color('color', '#00FF00')} />;
    