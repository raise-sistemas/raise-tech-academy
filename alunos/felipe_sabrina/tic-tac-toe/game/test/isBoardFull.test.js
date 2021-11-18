import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";
import { isBoardFull } from "../isBoardFull.js";
import {EMPTY, PLAYER1} from "../../utils/general.js";

Deno.test("board vazio", () => {
  const board = [
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
  ];

  assertEquals(isBoardFull(board, EMPTY), false);
});

Deno.test("board nem vazio nem cheio", () => {
  const board = [
    [PLAYER1, EMPTY, EMPTY],
    [EMPTY, PLAYER1, EMPTY],
    [EMPTY, EMPTY, PLAYER1],
  ];

  assertEquals(isBoardFull(board, EMPTY), false);
});

Deno.test("board cheio", () => {
  const board = [
    [PLAYER1, PLAYER1, PLAYER1],
    [PLAYER1, PLAYER1, PLAYER1],
    [PLAYER1, PLAYER1, PLAYER1],
  ];

  assertEquals(isBoardFull(board, EMPTY), true);
});
