
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SelfieTime from '../src/SelfieTime';

export default {
  title: 'SelfieTime',
  component: SelfieTime,
};

export const Primary = () => <SelfieTime color="primary" />;
export const Secondary = () => <SelfieTime color="secondary" />;
export const Color = () => <SelfieTime color={color('color', '#00FF00')} />;
    