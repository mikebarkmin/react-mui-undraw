
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Create from '../src/Create';

export default {
  title: 'Create',
  component: Create,
};

export const Primary = () => <Create color="primary" />;
export const Secondary = () => <Create color="secondary" />;
export const Color = () => <Create color={color('color', '#00FF00')} />;
    