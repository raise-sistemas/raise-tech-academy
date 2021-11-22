import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";
import { isWinner } from "./isWinner.js";

const empty = " ";
const player = "X";

Deno.test("player vencedor linha 1", () => {
  const board = [
    [player, player, player],
    [empty, empty, empty],
    [empty, empty, empty],
  ];

  assertEquals(isWinner(player, board), true);
});

Deno.test("player vencedor linha 2", () => {
  const board = [
    [empty, empty, empty],
    [player, player, player],
    [empty, empty, empty],
  ];

  assertEquals(isWinner(player, board), true);
});

Deno.test("player vencedor linha 3", () => {
  const board = [
    [empty, empty, empty],
    [empty, empty, empty],
    [player, player, player],
  ];

  assertEquals(isWinner(player, board), true);
});

Deno.test("player vencedor coluna 1", () => {
  const board = [
    [player, empty, empty],
    [player, empty, empty],
    [player, empty, empty],
  ];

  assertEquals(isWinner(player, board), true);
});

Deno.test("player vencedor coluna 2", () => {
  const board = [
    [empty, player, empty],
    [empty, player, empty],
    [empty, player, empty],
  ];

  assertEquals(isWinner(player, board), true);
});

Deno.test("player vencedor coluna 3", () => {
  const board = [
    [empty, empty, player],
    [empty, empty, player],
    [empty, empty, player],
  ];

  assertEquals(isWinner(player, board), true);
});

Deno.test("player vencedor diagonal 1", () => {
  const board = [
    [empty, empty, player],
    [empty, player, empty],
    [player, empty, empty],
  ];

  assertEquals(isWinner(player, board), true);
});

Deno.test("player vencedor diagonal 2", () => {
  const board = [
    [player, empty, empty],
    [empty, player, empty],
    [empty, empty, player],
  ];

  assertEquals(isWinner(player, board), true);
});