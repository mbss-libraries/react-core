import React, { useEffect } from 'react';
import './PageLoader.css';

export interface PageLoaderProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const PageLoader: React.FC<PageLoaderProps> = (props: React.PropsWithChildren<PageLoaderProps>) => {
  const { children, className, style } = props;
  useEffect(() => {
    return () => {
      new Promise<void>((resolve) => setTimeout(() => resolve(), 5000));
    };
  }, []);

  return (
    <div className="container">
      <div className="spinner">
        <div className={'spinner-border text-primary spinner-el'} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};
