
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CautiousDog from '../src/CautiousDog';

export default {
  title: 'CautiousDog',
  component: CautiousDog,
};

export const Primary = () => <CautiousDog color="primary" />;
export const Secondary = () => <CautiousDog color="secondary" />;
export const Color = () => <CautiousDog color={color('color', '#00FF00')} />;
    