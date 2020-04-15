
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CoWorkers from '../src/CoWorkers';

export default {
  title: 'CoWorkers',
  component: CoWorkers,
};

export const Primary = () => <CoWorkers color="primary" />;
export const Secondary = () => <CoWorkers color="secondary" />;
export const Color = () => <CoWorkers color={color('color', '#00FF00')} />;
    