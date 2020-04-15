
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InTheOffice from '../src/InTheOffice';

export default {
  title: 'InTheOffice',
  component: InTheOffice,
};

export const Primary = () => <InTheOffice color="primary" />;
export const Secondary = () => <InTheOffice color="secondary" />;
export const Color = () => <InTheOffice color={color('color', '#00FF00')} />;
    