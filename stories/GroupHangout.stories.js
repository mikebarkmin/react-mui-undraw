
import React from 'react';
import { color } from '@storybook/addon-knobs';
import GroupHangout from '../src/GroupHangout';

export default {
  title: 'GroupHangout',
  component: GroupHangout,
};

export const Primary = () => <GroupHangout color="primary" />;
export const Secondary = () => <GroupHangout color="secondary" />;
export const Color = () => <GroupHangout color={color('color', '#00FF00')} />;
    