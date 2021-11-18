import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";
import { isWinner } from "../isWinner.js";
import {EMPTY, PLAYER1, PLAYER2} from "../../utils/general.js";

Deno.test("Nenhum vencedor", () => {
  const board = [
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
  ];

  assertEquals(isWinner(PLAYER1, board), 0);
});

Deno.test("board não cheio com um vencedor", () => {
  const board = [
    [PLAYER1, PLAYER2, PLAYER2],
    [PLAYER2, PLAYER1, EMPTY],
    [EMPTY, EMPTY, PLAYER1],
  ];

  assertEquals(isWinner(PLAYER1, board), 1);
});

Deno.test("board cheio com um vencedor", () => {
  const board = [
    [PLAYER1, PLAYER1, PLAYER1],
    [PLAYER2, PLAYER1, PLAYER2],
    [PLAYER2, PLAYER2, PLAYER1],
  ];

  assertEquals(isWinner(PLAYER1, board), 1);
});

Deno.test("board cheio com nenhum vencedor", () => {
    const board = [
      [PLAYER1, PLAYER1, PLAYER2],
      [PLAYER2, PLAYER2, PLAYER1],
      [PLAYER1, PLAYER2, PLAYER1],
    ];
  
    assertEquals(isWinner(PLAYER1, board), 0);
  });