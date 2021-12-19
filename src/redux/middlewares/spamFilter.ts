import { ADD_POST } from "../types";
import { Middleware } from "@reduxjs/toolkit";
import { errorAction } from "../actions";

const badWords = ["lox", "pidr"];

export const spamFilter: Middleware<{}, {}> =
  (storeApi) => (next) => (action) => {
    if (action.type === ADD_POST) {
      console.log("ADD Post", action.post);

      const hasBadWord = badWords.some((w) => action.post.title.includes(w));
      if (hasBadWord) {
        storeApi.dispatch(errorAction("Bad word", true) as any);
      }
    }

    return next(action);
  };
