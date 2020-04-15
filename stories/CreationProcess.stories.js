
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CreationProcess from '../src/CreationProcess';

export default {
  title: 'CreationProcess',
  component: CreationProcess,
};

export const Primary = () => <CreationProcess color="primary" />;
export const Secondary = () => <CreationProcess color="secondary" />;
export const Color = () => <CreationProcess color={color('color', '#00FF00')} />;
    