import test from 'ava';

import { power } from './number';

test('double', (t) => {
  t.is(power(2, 2), 4);
});
