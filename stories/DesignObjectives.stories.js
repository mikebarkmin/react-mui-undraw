
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DesignObjectives from '../src/DesignObjectives';

export default {
  title: 'DesignObjectives',
  component: DesignObjectives,
};

export const Primary = () => <DesignObjectives color="primary" />;
export const Secondary = () => <DesignObjectives color="secondary" />;
export const Color = () => <DesignObjectives color={color('color', '#00FF00')} />;
    