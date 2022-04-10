import { defer, from, Observable } from "rxjs";

const deferrer = (promise: Promise<any>): Observable<any> => {
  return defer(() => from(promise));
};

export { deferrer };
