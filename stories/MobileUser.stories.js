
import React from 'react';
import { color } from '@storybook/addon-knobs';
import MobileUser from '../src/MobileUser';

export default {
  title: 'MobileUser',
  component: MobileUser,
};

export const Primary = () => <MobileUser color="primary" />;
export const Secondary = () => <MobileUser color="secondary" />;
export const Color = () => <MobileUser color={color('color', '#00FF00')} />;
    