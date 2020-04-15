
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Invite from '../src/Invite';

export default {
  title: 'Invite',
  component: Invite,
};

export const Primary = () => <Invite color="primary" />;
export const Secondary = () => <Invite color="secondary" />;
export const Color = () => <Invite color={color('color', '#00FF00')} />;
    