
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LiveCollaboration from '../src/LiveCollaboration';

export default {
  title: 'LiveCollaboration',
  component: LiveCollaboration,
};

export const Primary = () => <LiveCollaboration color="primary" />;
export const Secondary = () => <LiveCollaboration color="secondary" />;
export const Color = () => <LiveCollaboration color={color('color', '#00FF00')} />;
    