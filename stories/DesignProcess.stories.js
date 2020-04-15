
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DesignProcess from '../src/DesignProcess';

export default {
  title: 'DesignProcess',
  component: DesignProcess,
};

export const Primary = () => <DesignProcess color="primary" />;
export const Secondary = () => <DesignProcess color="secondary" />;
export const Color = () => <DesignProcess color={color('color', '#00FF00')} />;
    