export function addCors(headers) {
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Methods", "*");
  headers.append("Access-Control-Allow-Headers", "*");
  headers.append("access-control-max-age", "86400");
}
