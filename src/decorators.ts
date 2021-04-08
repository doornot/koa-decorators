export const routerList: any[] = [];
export const controllerList: any[] = [];
export const parseList: any[] = [];
export const paramList: any[] = [];

// Router - 类装饰器
export function Router(basename = '') {
  return (constrcutor: any) => {
    routerList.push({
      constrcutor,
      basename
    });
  };
}

// Method - 方法装饰器
export function Method(type: any) {
  return (path: any) => (target: any, name: any, descriptor: any) => {
    controllerList.push({
      target,
      type,
      path,
      method: name,
      controller: descriptor.value
    });
  };
}

// 参数解析 - 参数装饰器
export function Parse(type: any) {
  return (target: any, name: any, index: any) => {
    parseList.push({
      target,
      type,
      method: name,
      index
    });
  };
}

// 获取参数 - 参数装饰器
export function Param(position: any) {
  return (key: any) => (target: any, name: any, index: any) => {
    paramList.push({
      target,
      key,
      position,
      method: name,
      index
    });
  };
}

export const Body = Param('body');
export const Header = Param('header');
export const Cookie = Param('cookie');
export const Query = Param('query');
export const Get = Method('get');
export const Post = Method('post');
