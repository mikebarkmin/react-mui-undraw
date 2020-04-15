
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Camping from '../src/Camping';

export default {
  title: 'Camping',
  component: Camping,
};

export const Primary = () => <Camping color="primary" />;
export const Secondary = () => <Camping color="secondary" />;
export const Color = () => <Camping color={color('color', '#00FF00')} />;
    