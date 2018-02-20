import safe from 'safeobj'

export const safeActionObj = state => next => action => {
  next(safe(action))
}
