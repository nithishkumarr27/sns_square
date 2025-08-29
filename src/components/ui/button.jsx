<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded transition-all duration-200 focus:outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer';
  
  const variants = {
    primary: 'bg-[linear-gradient(90deg,#064ee3_0%,_#3d76ec_100%)] text-global-12 hover:opacity-90 focus:ring-blue-500',
    secondary: 'bg-button-1 text-button-1 hover:bg-gray-800 focus:ring-gray-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400',
  };
  
  const sizes = {
    small: 'px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm',
    medium: 'px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base',
    large: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg',
  };
=======
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
>>>>>>> a4f5890de8d8cac7cf1318e5af6a039482d00171

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
