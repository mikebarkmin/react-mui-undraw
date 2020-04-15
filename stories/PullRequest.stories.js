
import React from 'react';
import { color } from '@storybook/addon-knobs';
import PullRequest from '../src/PullRequest';

export default {
  title: 'PullRequest',
  component: PullRequest,
};

export const Primary = () => <PullRequest color="primary" />;
export const Secondary = () => <PullRequest color="secondary" />;
export const Color = () => <PullRequest color={color('color', '#00FF00')} />;
    