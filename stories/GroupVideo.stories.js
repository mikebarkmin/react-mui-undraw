
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GroupVideo from '../src/GroupVideo';

export default {
  title: 'GroupVideo',
  component: GroupVideo,
};

export const Primary = () => <GroupVideo color="primary" />;
export const Secondary = () => <GroupVideo color="secondary" />;
export const Color = () => <GroupVideo color={color('color', '#00FF00')} />;
    