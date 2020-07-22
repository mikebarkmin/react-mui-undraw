
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DesignTeam from '../src/DesignTeam';

export default {
  title: 'DesignTeam',
  component: DesignTeam,
};

export const Primary = () => <DesignTeam color="primary" />;
export const Secondary = () => <DesignTeam color="secondary" />;
export const Color = () => <DesignTeam color={color('color', '#00FF00')} />;
    