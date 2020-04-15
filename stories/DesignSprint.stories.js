
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DesignSprint from '../src/DesignSprint';

export default {
  title: 'DesignSprint',
  component: DesignSprint,
};

export const Primary = () => <DesignSprint color="primary" />;
export const Secondary = () => <DesignSprint color="secondary" />;
export const Color = () => <DesignSprint color={color('color', '#00FF00')} />;
    