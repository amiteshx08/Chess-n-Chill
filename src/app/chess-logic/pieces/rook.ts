import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { FENChar, Coords, Color } from "../models";
import { Piece } from "./pieces";

export class Rook extends Piece {
    protected override _FENChar: FENChar;
    protected override _directions: Coords[] = [
        {x: 1, y: 0},
        {x: -1, y: 0},
        {x: 0, y: 1},
        {x: 0, y: -1},
    ]

    constructor(private pieceColor: Color) {
        super(pieceColor)
        this._FENChar = pieceColor === Color.White ? FENChar.WhiteRook : FENChar.BlackRook
    }
}