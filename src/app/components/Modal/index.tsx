/**
 *
 * Modal
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {}

export function Modal(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return <div>{t('')}</div>;
}
