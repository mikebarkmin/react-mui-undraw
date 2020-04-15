
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ProjectFeedback from '../src/ProjectFeedback';

export default {
  title: 'ProjectFeedback',
  component: ProjectFeedback,
};

export const Primary = () => <ProjectFeedback color="primary" />;
export const Secondary = () => <ProjectFeedback color="secondary" />;
export const Color = () => <ProjectFeedback color={color('color', '#00FF00')} />;
    