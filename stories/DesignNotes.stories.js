
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DesignNotes from '../src/DesignNotes';

export default {
  title: 'DesignNotes',
  component: DesignNotes,
};

export const Primary = () => <DesignNotes color="primary" />;
export const Secondary = () => <DesignNotes color="secondary" />;
export const Color = () => <DesignNotes color={color('color', '#00FF00')} />;
    