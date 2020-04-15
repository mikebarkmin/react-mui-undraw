
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DesignFeedback from '../src/DesignFeedback';

export default {
  title: 'DesignFeedback',
  component: DesignFeedback,
};

export const Primary = () => <DesignFeedback color="primary" />;
export const Secondary = () => <DesignFeedback color="secondary" />;
export const Color = () => <DesignFeedback color={color('color', '#00FF00')} />;
    