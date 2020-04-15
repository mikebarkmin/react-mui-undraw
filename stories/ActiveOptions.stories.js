
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ActiveOptions from '../src/ActiveOptions';

export default {
  title: 'ActiveOptions',
  component: ActiveOptions,
};

export const Primary = () => <ActiveOptions color="primary" />;
export const Secondary = () => <ActiveOptions color="secondary" />;
export const Color = () => <ActiveOptions color={color('color', '#00FF00')} />;
    