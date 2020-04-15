
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DownloadFiles from '../src/DownloadFiles';

export default {
  title: 'DownloadFiles',
  component: DownloadFiles,
};

export const Primary = () => <DownloadFiles color="primary" />;
export const Secondary = () => <DownloadFiles color="secondary" />;
export const Color = () => <DownloadFiles color={color('color', '#00FF00')} />;
    