import { componentMap } from '@/constant';
import { SectionData, Sections } from '@/types';

export const SectionRenderer: React.FC<{
  section: SectionData;
}> = ({ section }) => {
  const Component = componentMap[section.__component];

  return <Component data={section} />;
};
