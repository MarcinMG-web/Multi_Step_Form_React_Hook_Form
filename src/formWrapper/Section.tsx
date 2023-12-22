import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type SectionProps = {
  title: string;
  children: ReactNode;
  url: string;
};

export function Section({ title, children, url }: SectionProps) {
  return (
    <div className='section mb-4'>
      <div className='title-row mb-4'>
        <h4>{title}</h4>
        <Link className={`btn btn-secondary`} to={url}>
          Edit
        </Link>
      </div>
      <div className='content'>{children}</div>
    </div>
  );
}

type SectionRowProps = {
  children: ReactNode;
};

export const SectionRow = ({ children }: SectionRowProps) => {
  return <div className='section-row'>{children}</div>;
};
