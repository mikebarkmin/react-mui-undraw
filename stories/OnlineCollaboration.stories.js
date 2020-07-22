
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnlineCollaboration from '../src/OnlineCollaboration';

export default {
  title: 'OnlineCollaboration',
  component: OnlineCollaboration,
};

export const Primary = () => <OnlineCollaboration color="primary" />;
export const Secondary = () => <OnlineCollaboration color="secondary" />;
export const Color = () => <OnlineCollaboration color={color('color', '#00FF00')} />;
    