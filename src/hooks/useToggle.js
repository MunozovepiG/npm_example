"use client";
import { useState } from 'react';

export const useToggle = () => {
const [toggleStatus, setStatus] = useState(false);
const toggleState = () => setStatus(preToggleStatus => !preToggleStatus)

  return {
toggleStatus, toggleState
  };
}

