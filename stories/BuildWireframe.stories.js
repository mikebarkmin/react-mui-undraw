
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BuildWireframe from '../src/BuildWireframe';

export default {
  title: 'BuildWireframe',
  component: BuildWireframe,
};

export const Primary = () => <BuildWireframe color="primary" />;
export const Secondary = () => <BuildWireframe color="secondary" />;
export const Color = () => <BuildWireframe color={color('color', '#00FF00')} />;
    