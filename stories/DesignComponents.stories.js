
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DesignComponents from '../src/DesignComponents';

export default {
  title: 'DesignComponents',
  component: DesignComponents,
};

export const Primary = () => <DesignComponents color="primary" />;
export const Secondary = () => <DesignComponents color="secondary" />;
export const Color = () => <DesignComponents color={color('color', '#00FF00')} />;
    