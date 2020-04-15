
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DesignTools from '../src/DesignTools';

export default {
  title: 'DesignTools',
  component: DesignTools,
};

export const Primary = () => <DesignTools color="primary" />;
export const Secondary = () => <DesignTools color="secondary" />;
export const Color = () => <DesignTools color={color('color', '#00FF00')} />;
    