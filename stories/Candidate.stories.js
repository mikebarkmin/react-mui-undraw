
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Candidate from '../src/Candidate';

export default {
  title: 'Candidate',
  component: Candidate,
};

export const Primary = () => <Candidate color="primary" />;
export const Secondary = () => <Candidate color="secondary" />;
export const Color = () => <Candidate color={color('color', '#00FF00')} />;
    