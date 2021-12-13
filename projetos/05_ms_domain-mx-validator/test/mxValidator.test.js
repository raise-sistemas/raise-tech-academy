import { assertEquals } from "https://deno.land/std@0.114.0/testing/asserts.ts";
import { validateEmail } from "../src/validateEmail.js";

Deno.test("Entradas de E-mail válidas", () => {
  const emails = [
    "mysite@ourearth.com",
    "my.ownsite@ourearth.org",
    "mysite@you.me.net",
  ];

  for (let email of emails) {
    assertEquals(validateEmail(email), true);
  }
});

Deno.test("Entradas de E-mail inválidas", () => {
  const emails = [
    "mysite.ourearth.com",
    "mysite@.com.my",
    "@you.me.net",
    "mysite123@gmail.b",
    "mysite@.org.org",
    ".mysite@mysite.org",
    "mysite()*@gmail.com",
    "mysite..1234@yahoo.com",
  ];

  for (let email of emails) {
    assertEquals(validateEmail(email), false);
  }
});
