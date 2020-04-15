
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SharedWorkspace from '../src/SharedWorkspace';

export default {
  title: 'SharedWorkspace',
  component: SharedWorkspace,
};

export const Primary = () => <SharedWorkspace color="primary" />;
export const Secondary = () => <SharedWorkspace color="secondary" />;
export const Color = () => <SharedWorkspace color={color('color', '#00FF00')} />;
    