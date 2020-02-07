import { IApi } from '@umijs/types';
import { readFileSync } from 'fs';
import { join } from 'path';

export default function (api: IApi) {
  api.onGenerateFiles(() => {
    // 写入到 .umi/plugin-utils/utils.ts 临时
    api.writeTmpFile({
      // 更好的方式通过读文件内容，这里只是演示
      content: readFileSync(join(__dirname, 'utils.ts'), 'utf-8'),
      path: 'plugin-utils/utils.ts'
    })
  });

  api.describe({
    key: 'ga',
    config: {
      schema(joi) {
        return joi.object();
      },
    },
  })

  // 注册模块到 umi 中
  api.addUmiExports(() => {
    return {
      exportAll: true,
      source: `../plugin-utils/utils`,
    };
  });

  api.addHTMLScripts(() => {
    return [
      { src: `https://www.googletagmanager.com/gtag/js?id=${api.config?.ga?.code}` }
    ]
  })
}
