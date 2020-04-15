
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InNoTime from '../src/InNoTime';

export default {
  title: 'InNoTime',
  component: InNoTime,
};

export const Primary = () => <InNoTime color="primary" />;
export const Secondary = () => <InNoTime color="secondary" />;
export const Color = () => <InNoTime color={color('color', '#00FF00')} />;
    