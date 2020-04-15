
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DesignData from '../src/DesignData';

export default {
  title: 'DesignData',
  component: DesignData,
};

export const Primary = () => <DesignData color="primary" />;
export const Secondary = () => <DesignData color="secondary" />;
export const Color = () => <DesignData color={color('color', '#00FF00')} />;
    