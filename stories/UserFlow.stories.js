
import React from 'react';
import { color } from '@storybook/addon-knobs';
import UserFlow from '../src/UserFlow';

export default {
  title: 'UserFlow',
  component: UserFlow,
};

export const Primary = () => <UserFlow color="primary" />;
export const Secondary = () => <UserFlow color="secondary" />;
export const Color = () => <UserFlow color={color('color', '#00FF00')} />;
    