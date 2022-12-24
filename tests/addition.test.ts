import path from 'path';
// @ts-ignore
import circom_tester from 'circom_tester';

const wasm_tester = circom_tester.wasm;

describe('Addition', () => {
  // eslint-disable-next-line
  let circuit: any;

  const sampleInput = {
    a: '1',
    b: '2',
  };

  before(async () => {
    circuit = await wasm_tester(path.join(__dirname, 'mock', 'test_addition.circom'));
  });

  it('produces a witness with valid constraints', async () => {
    const witness = await circuit.calculateWitness(sampleInput);
    await circuit.checkConstraints(witness);
  });

  it('has the correct output', async () => {
    const expected = { c: 3 };
    const witness = await circuit.calculateWitness(sampleInput);
    await circuit.assertOut(witness, expected);
  });
});
