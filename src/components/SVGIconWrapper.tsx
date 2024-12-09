import React, { ComponentType, SVGProps } from 'react';

type SVGComponent = ComponentType<SVGProps<SVGSVGElement>>;
type IconType = SVGComponent | string;

interface SVGIconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconType;
  width?: number;
  height?: number;
  color?: string;
}

const SVGIconWrapper: React.FC<SVGIconWrapperProps> = ({ 
  icon, 
  className = '', 
  style = {},
  width = 24,
  height = 24,
  color = 'currentColor',
  ...rest 
}) => {
  const renderIcon = () => {
    if (typeof icon !== 'string') {
      const IconComponent = icon;
      return (
        <IconComponent 
          width={width}
          height={height}
          color={color}
        />
      );
    }
    
    return (
      <img 
        src={icon} 
        alt="Icon" 
        width={width} 
        height={height} 
      />
    );
  };

  return (
    <div 
      className={`svg-icon-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `${width}px`,
        height: `${height}px`,
        ...style
      }}
      {...rest}
    >
      {renderIcon()}
    </div>
  );
};

export default SVGIconWrapper;