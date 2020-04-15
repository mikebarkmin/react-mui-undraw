
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Collaborators from '../src/Collaborators';

export default {
  title: 'Collaborators',
  component: Collaborators,
};

export const Primary = () => <Collaborators color="primary" />;
export const Secondary = () => <Collaborators color="secondary" />;
export const Color = () => <Collaborators color={color('color', '#00FF00')} />;
    