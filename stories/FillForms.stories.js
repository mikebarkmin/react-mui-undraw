
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FillForms from '../src/FillForms';

export default {
  title: 'FillForms',
  component: FillForms,
};

export const Primary = () => <FillForms color="primary" />;
export const Secondary = () => <FillForms color="secondary" />;
export const Color = () => <FillForms color={color('color', '#00FF00')} />;
    