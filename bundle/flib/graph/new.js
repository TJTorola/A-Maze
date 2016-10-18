import { DEFAULT_CELL } from 'utilities/constants'

const cell = () => (DEFAULT_CELL);
const row = x => () => new Array(x).fill(null).map(cell)
export default (x, y) => new Array(y).fill(null).map(row(x))