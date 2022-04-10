import { Observable, of } from "rxjs";

interface user {
  id: number;
  name: string;
}

const getUsers = (): Observable<user[]> => {
  console.log(`Get All Users from DB`);
  return of([
    { id: 1, name: "user1" },
    { id: 2, name: "user2" },
  ]);
};

export { user, getUsers };
