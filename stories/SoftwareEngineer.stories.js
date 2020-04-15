
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SoftwareEngineer from '../src/SoftwareEngineer';

export default {
  title: 'SoftwareEngineer',
  component: SoftwareEngineer,
};

export const Primary = () => <SoftwareEngineer color="primary" />;
export const Secondary = () => <SoftwareEngineer color="secondary" />;
export const Color = () => <SoftwareEngineer color={color('color', '#00FF00')} />;
    