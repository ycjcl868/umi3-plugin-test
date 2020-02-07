import { join } from 'path';
import { existsSync } from 'fs';
import { Service } from 'umi';
import { render } from '@testing-library/react';

const cwd = join(__dirname, './fixtures');

test('test getUserName export', async () => {
  const service = new Service({
    cwd,
    plugins: [require.resolve('./')],
  });
  await service.run({
    name: 'g',
    args: {
      _: ['g', 'tmp'],
    },
  });
  expect(existsSync(join(cwd, '.umi-test', 'core', 'umiExports.ts'))).toEqual(true);

  const reactNode = require(join(cwd, '.umi-test', 'umi.ts')).default;
  const { container } = render(reactNode);
  expect(container.textContent).toEqual('Hello World');
})
