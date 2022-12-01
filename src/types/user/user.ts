export type CredentialsT = {
  email: string;
  password: string;
};

export interface UserI {
  role: string;
  email: string;
  memberId: string | null;
  clubId: string | null;
  iat: number;
}
