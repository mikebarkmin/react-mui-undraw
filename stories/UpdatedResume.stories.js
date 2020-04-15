
import React from 'react';
import { color } from '@storybook/addon-knobs';
import UpdatedResume from '../src/UpdatedResume';

export default {
  title: 'UpdatedResume',
  component: UpdatedResume,
};

export const Primary = () => <UpdatedResume color="primary" />;
export const Secondary = () => <UpdatedResume color="secondary" />;
export const Color = () => <UpdatedResume color={color('color', '#00FF00')} />;
    