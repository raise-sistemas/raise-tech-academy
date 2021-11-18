import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";
import { isVoid } from "../isVoid.js";
import {EMPTY, PLAYER1, PLAYER2} from "../../utils/general.js";

Deno.test("Board vazio", () => {
  const board = [
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
  ];

  assertEquals(isVoid(board, 0, 0, PLAYER1), true);
});

Deno.test("board não cheio com lugar escolhido vazio", () => {
  const board = [
    [PLAYER1, PLAYER2, PLAYER2],
    [PLAYER2, PLAYER1, EMPTY],
    [EMPTY, EMPTY, PLAYER1],
  ];

  assertEquals(isVoid(board, 1, 2, PLAYER1), true);
});

Deno.test("board não cheio com lugar escolhido ocupado", () => {
    const board = [
        [PLAYER1, PLAYER2, PLAYER2],
        [PLAYER2, PLAYER1, EMPTY],
        [EMPTY, EMPTY, PLAYER1],
    ];

  assertEquals(isVoid(board, 0, 0, PLAYER1), false);
});

Deno.test("board cheio com lugar escolhido ocupado", () => {
    const board = [
      [PLAYER1, PLAYER1, PLAYER2],
      [PLAYER2, PLAYER2, PLAYER1],
      [PLAYER1, PLAYER2, PLAYER1],
    ];
  
    assertEquals(isVoid(board, 0, 0, PLAYER1), false);
  });