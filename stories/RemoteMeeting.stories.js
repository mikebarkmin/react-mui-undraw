
import React from 'react';
import { color } from '@storybook/addon-knobs';
import RemoteMeeting from '../src/RemoteMeeting';

export default {
  title: 'RemoteMeeting',
  component: RemoteMeeting,
};

export const Primary = () => <RemoteMeeting color="primary" />;
export const Secondary = () => <RemoteMeeting color="secondary" />;
export const Color = () => <RemoteMeeting color={color('color', '#00FF00')} />;
    