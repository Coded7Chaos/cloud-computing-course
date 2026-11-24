import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

test('la bienvenida conserva el enlace a CI/CD', () => {
  const texto = readFileSync('docs/bienvenida.md', 'utf8');
  assert.match(texto, /\.\/cicd\/introduccion\.md/);
});