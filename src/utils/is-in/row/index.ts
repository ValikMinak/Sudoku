import {GRID, NUMBERS} from "../../../typings";

interface IInput {
    grid: GRID
    row: number
    value: NUMBERS

}

/**
 *
 * A function returns true if the value is already used in the current grid row.
 * @param input Object wiht 9X9 Sudoku Grid, row index and value
 *
 */

function isInRow({grid, row, value}: IInput): boolean {
    return grid[row].includes(value)
}

export default isInRow
