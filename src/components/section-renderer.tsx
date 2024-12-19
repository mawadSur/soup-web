import { componentMap } from '@/constant';
import { SectionData } from '@/types';

export const SectionRenderer: React.FC<{
  section: SectionData;
}> = ({ section }) => {
  const Component = componentMap[section.__component] as React.ComponentType<{ data: SectionData }>;

  return <Component data={section} />;
};
