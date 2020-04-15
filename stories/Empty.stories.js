
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Empty from '../src/Empty';

export default {
  title: 'Empty',
  component: Empty,
};

export const Primary = () => <Empty color="primary" />;
export const Secondary = () => <Empty color="secondary" />;
export const Color = () => <Empty color={color('color', '#00FF00')} />;
    