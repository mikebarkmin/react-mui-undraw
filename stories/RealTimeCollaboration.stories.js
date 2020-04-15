
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RealTimeCollaboration from '../src/RealTimeCollaboration';

export default {
  title: 'RealTimeCollaboration',
  component: RealTimeCollaboration,
};

export const Primary = () => <RealTimeCollaboration color="primary" />;
export const Secondary = () => <RealTimeCollaboration color="secondary" />;
export const Color = () => <RealTimeCollaboration color={color('color', '#00FF00')} />;
    