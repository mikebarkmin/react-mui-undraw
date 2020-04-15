
import React from 'react';
import { color } from '@storybook/addon-knobs';
import IdeasFlow from '../src/IdeasFlow';

export default {
  title: 'IdeasFlow',
  component: IdeasFlow,
};

export const Primary = () => <IdeasFlow color="primary" />;
export const Secondary = () => <IdeasFlow color="secondary" />;
export const Color = () => <IdeasFlow color={color('color', '#00FF00')} />;
    