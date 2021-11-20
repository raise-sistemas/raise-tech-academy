import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts"
import { checkInput } from "../checkInput.js"
import { removeSpecials } from "../../utils/removeSpecials.js"


Deno.test("check right answer", () => {
  const input = "M"
  const init = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 6,
    correct: [" ", " ", " ", " "],
    wrong: [],
    tips: {
      class: [],
      synonyms: []
    }
  }
  const end = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 6,
    correct: ["M", " ", " ", " "],
    wrong: [],
    tips: {
      class: [],
      synonyms: []
    }
  }
  assertEquals(checkInput([input, init], removeSpecials), end)
})

Deno.test("check right answer with Ç", () => {
  const input = "Ç"
  const init = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 6,
    correct: [" ", " ", " ", " "],
    wrong: [],
    tips: {
      class: [],
      synonyms: []
    }
  }
  const end = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 6,
    correct: [" ", " ", "Ç", " "],
    wrong: [],
    tips: {
      class: [],
      synonyms: []
    }
  }
  assertEquals(checkInput([input, init], removeSpecials), end)
})

Deno.test("check right answer with C as Ç", () => {
  const input = "C"
  const init = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 6,
    correct: [" ", " ", " ", " "],
    wrong: [],
    tips: {
      class: [],
      synonyms: []
    }
  }
  const end = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 6,
    correct: [" ", " ", "Ç", " "],
    wrong: [],
    tips: {
      class: [],
      synonyms: []
    }
  }
  assertEquals(checkInput([input, init], removeSpecials), end)
})

Deno.test("check right answer with special character", () => {
  const input = "A"
  const init = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 6,
    correct: [" ", " ", " ", " "],
    wrong: [],
    tips: {
      class: [],
      synonyms: []
    }
  }
  const end = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 6,
    correct: [" ", "A", " ", "Ã"],
    wrong: [],
    tips: {
      class: [],
      synonyms: []
    }
  }
  assertEquals(checkInput([input, init], removeSpecials), end)
})

Deno.test("check wrong answer", () => {
  const input = "W"
  const init = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 6,
    correct: [" ", " ", " ", " "],
    wrong: [],
    tips: {
      class: [],
      synonyms: []
    }
  }
  const end = {
    secretWord: "MAÇÃ",
    status: "playing",
    chances: 5,
    correct: [" ", " ", " ", " "],
    wrong: ["W"],
    tips: {
      class: [],
      synonyms: []
    }
  }
  assertEquals(checkInput([input, init], removeSpecials), end)
})