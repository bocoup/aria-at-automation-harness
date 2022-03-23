/**
 * @module agent
 */

import { promisify } from 'util';

import { parseAgentCli } from './cli.js';

export async function runCli(argv = process.argv) {
  const { stdin, stdout, stderr } = process;
  return await parseAgentCli({
    argv,
    signals: process,
    send: process.send ? (...args) => promisify(process.send).call(process, ...args) : null,
    stdin,
    stdout,
    stderr,
  });
}
