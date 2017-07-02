export interface Type {
  properties?: TypeProperties,
  type: string
  typebase: string
  validator: TypeValidator
}

export interface TypeProperties {
  [key: string]: any
  default?: string
  max?: number
  min?: number
  nullable?: boolean
  regex?: string
}

export type TypeValidator = (value: any, ...args: any[]) => boolean