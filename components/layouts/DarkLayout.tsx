import { FC } from 'react';

interface DarkLayoutProps {
  children: JSX.Element;
}

const DarkLayout: FC<DarkLayoutProps> = ({ children }) => {
  return (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '0.625rem', borderRadius: '0.3125rem' }}>
      <h3>DarkLayout</h3>
      <div>{children}</div>
    </div>
  );
};

export default DarkLayout;
