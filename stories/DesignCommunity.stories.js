
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DesignCommunity from '../src/DesignCommunity';

export default {
  title: 'DesignCommunity',
  component: DesignCommunity,
};

export const Primary = () => <DesignCommunity color="primary" />;
export const Secondary = () => <DesignCommunity color="secondary" />;
export const Color = () => <DesignCommunity color={color('color', '#00FF00')} />;
    