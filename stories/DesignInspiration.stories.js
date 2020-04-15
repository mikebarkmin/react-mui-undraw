
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DesignInspiration from '../src/DesignInspiration';

export default {
  title: 'DesignInspiration',
  component: DesignInspiration,
};

export const Primary = () => <DesignInspiration color="primary" />;
export const Secondary = () => <DesignInspiration color="secondary" />;
export const Color = () => <DesignInspiration color={color('color', '#00FF00')} />;
    