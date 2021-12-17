import { isSlugValid } from './isSlugValid.js';

export function slugGenerate(base = 36){
  let slug;

  do{
    slug = Math.random().toString(base).replace(/[^a-z]+/g, '').substr(0, 5);
  }while(!isSlugValid(slug));

  return slug;
};