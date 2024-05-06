declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGElement>>
  export default content
}

declare module "vite-plugin-eslint" {
  const eslint: any
  export default eslint
}
