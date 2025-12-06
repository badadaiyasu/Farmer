import { NavLink as RouterNavLink } from "react-router-dom";
import type { NavLinkProps, NavLinkRenderProps } from "react-router-dom";
import { forwardRef, type ReactNode } from "react";
import { cn } from "../lib/utils";
import { ChevronRight, Sparkles, Circle } from "lucide-react";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string | ((props: NavLinkRenderProps) => string);
  activeClassName?: string;
  pendingClassName?: string;
  variant?: "default" | "outline" | "ghost" | "pill" | "tab";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  showChevron?: boolean;
  badge?: string | number;
  badgeVariant?: "primary" | "secondary" | "success" | "warning" | "danger";
  showActiveIndicator?: boolean;
  gradient?: boolean;
  children?: ReactNode | ((props: NavLinkRenderProps) => ReactNode);
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ 
    className, 
    activeClassName, 
    pendingClassName, 
    to, 
    variant = "default",
    size = "md",
    icon,
    showChevron = false,
    badge,
    badgeVariant = "primary",
    showActiveIndicator = false,
    gradient = false,
    children,
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm font-medium",
      md: "px-4 py-2.5 text-sm font-semibold",
      lg: "px-5 py-3 text-base font-semibold",
    };

    const variantClasses = {
      default: "text-slate-800 dark:text-slate-100 hover:text-[#367588] dark:hover:text-[#367588] transition-all duration-200",
      outline: "border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[#367588] hover:text-[#367588] dark:hover:text-[#367588] transition-all duration-200",
      ghost: "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#002e63] dark:hover:text-[#367588] transition-all duration-200",
      pill: "rounded-full px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-linear-to-r hover:from-[#367588]/10 hover:to-[#002e63]/10 hover:text-[#002e63] dark:hover:text-[#367588] transition-all duration-300",
      tab: "border-b-2 border-transparent text-slate-600 dark:text-slate-400 hover:text-[#002e63] dark:hover:text-[#367588] transition-all duration-200",
    };

    const activeVariantClasses = {
      default: "text-[#002e63] dark:text-[#367588] font-bold",
      outline: "border-2 border-[#367588] text-[#002e63] dark:text-[#367588] bg-[#367588]/5 dark:bg-[#367588]/10",
      ghost: "bg-[#367588]/10 dark:bg-[#367588]/20 text-[#002e63] dark:text-[#367588] font-semibold",
      pill: "rounded-full bg-linear-to-r from-[#367588] to-[#002e63] text-white shadow-lg",
      tab: "border-b-2 border-[#367588] text-[#002e63] dark:text-[#367588] font-semibold",
    };

    const badgeClasses = {
      primary: "bg-[#367588] text-white",
      secondary: "bg-[#918151] text-white",
      success: "bg-[#367588]/20 text-[#002e63] dark:text-[#367588] border border-[#367588]/30",
      warning: "bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30",
      danger: "bg-red-500/20 text-red-700 dark:text-red-400 border border-red-500/30",
    };

    const pendingClasses = "animate-pulse bg-slate-100 dark:bg-slate-800";

    const gradientStyles = gradient ? {
      background: "linear-gradient(135deg, #367588 0%, #002e63 50%, #00008b 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    } : {};

    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={(linkProps: NavLinkRenderProps) =>
          cn(
            "group relative inline-flex items-center gap-2.5 rounded-lg transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-[#367588]/30 focus:ring-offset-2 dark:focus:ring-offset-slate-900",
            sizeClasses[size],
            variantClasses[variant],
            linkProps.isActive && [
              activeVariantClasses[variant],
              activeClassName,
              gradient && "bg-linear-to-r from-[#367588] to-[#002e63] bg-clip-text text-transparent"
            ],
            linkProps.isPending && pendingClasses,
            linkProps.isPending && pendingClassName,
            typeof className === 'function' ? className(linkProps) : className
          )
        }
        style={(linkProps: NavLinkRenderProps) => (linkProps.isActive && gradient ? gradientStyles : {})}
        {...props}
      >
        {(linkProps: NavLinkRenderProps) => (
          <>
            {/* Active Indicator */}
            {showActiveIndicator && (
              <div className="absolute -left-2 top-1/2 -translate-y-1/2">
                <div className="relative">
                  <Circle className="h-2 w-2 text-[#367588] animate-ping absolute opacity-75" />
                  <Circle className="h-2 w-2 text-[#367588] relative" />
                </div>
              </div>
            )}

            {/* Icon */}
            {icon && (
              <span className={cn(
                "transition-transform duration-200",
                "group-hover:scale-110 group-hover:text-[#367588]",
                "group-[&.active]:scale-110 group-[&.active]:text-[#002e63] dark:group-[&.active]:text-[#367588]"
              )}>
                {icon}
              </span>
            )}

            {/* Content */}
            <span className="relative">
              {typeof children === 'function' ? children(linkProps) : children}
              
              {/* Sparkle effect for active state */}
              {gradient && (
                <Sparkles className="absolute -top-3 -right-3 h-4 w-4 text-amber-500 opacity-0 group-hover:opacity-100 group-[&.active]:opacity-100 transition-opacity duration-300" />
              )}
            </span>

            {/* Badge */}
            {badge && (
              <span className={cn(
                "ml-1.5 px-2 py-0.5 rounded-full text-xs font-bold transition-all duration-200",
                badgeClasses[badgeVariant],
                "group-hover:scale-110",
                "group-[&.active]:bg-[#002e63] group-[&.active]:text-white dark:group-[&.active]:bg-[#367588]"
              )}>
                {badge}
              </span>
            )}

            {/* Chevron */}
            {showChevron && (
              <ChevronRight className={cn(
                "h-3.5 w-3.5 transition-all duration-200 ml-auto",
                "group-hover:translate-x-1 group-hover:text-[#367588]",
                "group-[&.active]:translate-x-1 group-[&.active]:text-[#002e63] dark:group-[&.active]:text-[#367588]",
                "group-[&.pending]:animate-pulse"
              )} />
            )}

            {/* Hover underline effect */}
            {variant === "default" && (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#367588] to-[#002e63] transition-all duration-300 group-hover:w-full group-[&.active]:w-full" />
            )}

            {/* Ripple effect for pill variant */}
            {variant === "pill" && (
              <span className="absolute inset-0 rounded-full bg-linear-to-r from-[#367588] to-[#002e63] opacity-0 group-hover:opacity-10 group-[&.active]:opacity-0 transition-opacity duration-300" />
            )}
          </>
        )}
      </RouterNavLink>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };