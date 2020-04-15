
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ActiveSupport from '../src/ActiveSupport';

export default {
  title: 'ActiveSupport',
  component: ActiveSupport,
};

export const Primary = () => <ActiveSupport color="primary" />;
export const Secondary = () => <ActiveSupport color="secondary" />;
export const Color = () => <ActiveSupport color={color('color', '#00FF00')} />;
    