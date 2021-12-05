import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";
import { isFutureDraw } from "../isFutureDraw.js";
import { EMPTY, PLAYER1, PLAYER2 } from "../utils/basicElements.js";

//PRIMEIRO TESTE
Deno.test("board na ultima jogada, com o O pra vencer, mas é vez do X", () => {
  const board = [
    PLAYER1,
    PLAYER1,
    PLAYER2,
    PLAYER2,
    PLAYER2,
    EMPTY,
    PLAYER1,
    PLAYER2,
    PLAYER1,
  ];

  assertEquals(isFutureDraw(board, PLAYER1), true);
});
//SEGUNDO TESTE
Deno.test("board na ultima jogada, com o X pra vencer, mas é vez do O", () => {
  const board = [
    PLAYER2,
    PLAYER2,
    PLAYER1,
    PLAYER1,
    PLAYER1,
    EMPTY,
    PLAYER2,
    PLAYER1,
    PLAYER2,
  ];

  assertEquals(isFutureDraw(board, PLAYER2), true);
});
//TERCEIRO TESTE
Deno.test("board faltando duas jogadas, mas irá dar velha", () => {
  const board = [
    PLAYER2,
    EMPTY,
    PLAYER1,
    PLAYER1,
    PLAYER1,
    PLAYER2,
    PLAYER2,
    EMPTY,
    PLAYER1,
  ];

  assertEquals(isFutureDraw(board, PLAYER2), true);
});
//QUARTO TESTE
Deno.test(
  "board faltando duas jogadas, porém em outras posições, mas irá dar velha",
  () => {
    const board = [
      PLAYER1,
      EMPTY,
      PLAYER2,
      PLAYER2,
      PLAYER2,
      PLAYER1,
      PLAYER1,
      EMPTY,
      PLAYER2,
    ];

    assertEquals(isFutureDraw(board, PLAYER1), true);
  }
);
