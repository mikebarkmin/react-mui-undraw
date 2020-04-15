
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Teacher from '../src/Teacher';

export default {
  title: 'Teacher',
  component: Teacher,
};

export const Primary = () => <Teacher color="primary" />;
export const Secondary = () => <Teacher color="secondary" />;
export const Color = () => <Teacher color={color('color', '#00FF00')} />;
    