import { IApi } from '@umijs/types';

export default function (api: IApi) {
  api.onGenerateFiles(() => {
    // 写入到 .umi/plugin-utils/utils.ts 临时
    api.writeTmpFile({
      // 更好的方式通过读文件内容，这里只是演示
      content: `export const getUserName = (name) => name;`,
      path: 'plugin-utils/utils.ts'
    })
  });

  // 注册模块到 umi 中
  api.addUmiExports(() => {
    return {
      exportAll: true,
      source: `../plugin-utils/utils`,
    };
  });
}
