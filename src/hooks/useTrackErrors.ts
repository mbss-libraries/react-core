import { useState } from 'react';

export const useTrackErrors = () => {
  const [errors, _setErrors] = useState({});

  const setErrors = (errsArray) => {
    const newErrors = { ...errors };
    errsArray.forEach(({ key, value }) => {
      newErrors[key] = value;
    });

    _setErrors(newErrors);
  };

  const clearErrors = () => {
    _setErrors({});
  };

  return { errors, setErrors, clearErrors };
};
