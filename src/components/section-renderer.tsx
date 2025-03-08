import { COMPONENT_MAP } from '@/constant';
import { SectionData } from '@/types';

export const SectionRenderer: React.FC<{
  section: SectionData;
}> = ({ section }) => {
  const Component = COMPONENT_MAP[section.__component] as React.ComponentType<{ data: SectionData }>;

  return <Component data={section} />;
};
