
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Gatsbyjs from '../src/Gatsbyjs';

export default {
  title: 'Gatsbyjs',
  component: Gatsbyjs,
};

export const Primary = () => <Gatsbyjs color="primary" />;
export const Secondary = () => <Gatsbyjs color="secondary" />;
export const Color = () => <Gatsbyjs color={color('color', '#00FF00')} />;
    