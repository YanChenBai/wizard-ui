import type { CompSize, CompType } from '@wizard-ui/preset'

export const compSize: Record<CompSize, `comp-size-${CompSize}`> = {
  xxs: 'comp-size-xxs',
  xs: 'comp-size-xs',
  sm: 'comp-size-sm',
  md: 'comp-size-md',
  lg: 'comp-size-lg',
  xl: 'comp-size-xl',
  xxl: 'comp-size-xxl',
}

export const compType: Record<CompType, `btn-${CompType}`> = {
  primary: 'btn-primary',
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
}
