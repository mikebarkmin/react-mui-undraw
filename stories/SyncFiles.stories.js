
import React from 'react';
import { color } from '@storybook/addon-knobs';
import SyncFiles from '../src/SyncFiles';

export default {
  title: 'SyncFiles',
  component: SyncFiles,
};

export const Primary = () => <SyncFiles color="primary" />;
export const Secondary = () => <SyncFiles color="secondary" />;
export const Color = () => <SyncFiles color={color('color', '#00FF00')} />;
    