
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Doctors from '../src/Doctors';

export default {
  title: 'Doctors',
  component: Doctors,
};

export const Primary = () => <Doctors color="primary" />;
export const Secondary = () => <Doctors color="secondary" />;
export const Color = () => <Doctors color={color('color', '#00FF00')} />;
    