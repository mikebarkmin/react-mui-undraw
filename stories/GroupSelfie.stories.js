
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GroupSelfie from '../src/GroupSelfie';

export default {
  title: 'GroupSelfie',
  component: GroupSelfie,
};

export const Primary = () => <GroupSelfie color="primary" />;
export const Secondary = () => <GroupSelfie color="secondary" />;
export const Color = () => <GroupSelfie color={color('color', '#00FF00')} />;
    