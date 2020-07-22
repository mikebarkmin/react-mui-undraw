
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DesignStats from '../src/DesignStats';

export default {
  title: 'DesignStats',
  component: DesignStats,
};

export const Primary = () => <DesignStats color="primary" />;
export const Secondary = () => <DesignStats color="secondary" />;
export const Color = () => <DesignStats color={color('color', '#00FF00')} />;
    