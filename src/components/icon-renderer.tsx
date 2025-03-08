import { ICON_MAP } from '@/constant';
import { IconType } from '@/types';

export const renderIcon = (iconName: IconType) => {
  const IconComponent = ICON_MAP[iconName];
  if (IconComponent) {
    return <IconComponent size={50} className="text-color2" />;
  } else {
    return null;
  }
};
