import React from 'react';
import { useCommonStyles } from './../../app/theme';

export default function About() {
  const commonStyle = useCommonStyles();
  return (
    <div className={commonStyle.content}>
      <h1>
        This is Live score site.
      </h1>
    </div>
  )
}