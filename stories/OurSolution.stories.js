
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OurSolution from '../src/OurSolution';

export default {
  title: 'OurSolution',
  component: OurSolution,
};

export const Primary = () => <OurSolution color="primary" />;
export const Secondary = () => <OurSolution color="secondary" />;
export const Color = () => <OurSolution color={color('color', '#00FF00')} />;
    