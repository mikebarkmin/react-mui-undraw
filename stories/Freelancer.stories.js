
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Freelancer from '../src/Freelancer';

export default {
  title: 'Freelancer',
  component: Freelancer,
};

export const Primary = () => <Freelancer color="primary" />;
export const Secondary = () => <Freelancer color="secondary" />;
export const Color = () => <Freelancer color={color('color', '#00FF00')} />;
    