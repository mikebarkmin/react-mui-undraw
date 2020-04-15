
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DesignThinking from '../src/DesignThinking';

export default {
  title: 'DesignThinking',
  component: DesignThinking,
};

export const Primary = () => <DesignThinking color="primary" />;
export const Secondary = () => <DesignThinking color="secondary" />;
export const Color = () => <DesignThinking color={color('color', '#00FF00')} />;
    