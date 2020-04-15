
import React from 'react';
import { color } from '@storybook/addon-knobs';
import TransferFiles from '../src/TransferFiles';

export default {
  title: 'TransferFiles',
  component: TransferFiles,
};

export const Primary = () => <TransferFiles color="primary" />;
export const Secondary = () => <TransferFiles color="secondary" />;
export const Color = () => <TransferFiles color={color('color', '#00FF00')} />;
    