import { iconMap } from '@/constant';
import { IconType } from '@/types';

export const renderIcon = (iconName: IconType) => {
  const IconComponent = iconMap[iconName];
  if (IconComponent) {
    return <IconComponent size={50} className="text-color2" />;
  } else {
    return null;
  }
};
