# Vue 3 + Typescript + Vite

# vue3模板
Vue3 + ts + js + Vite2.x + ElementPlus + Sass + Axios + VueRouter 4.x + Pinia... 

# error
自动加载组件报错：在页面中写错组件后仍会自动加载相关的组件在components.d.ts中，即使删除报错代码后再次保存仍会再次加载进去错误的组件，由于找不到相关的组件就会报错。


## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
