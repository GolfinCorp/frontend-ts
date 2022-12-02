export type MemberT = {
  _id: string;
  firstName: string;
  lastname: string;
  membership: number;
  billingDate?: string;
  status?: string;
  clubId: string;
};

export type MemberListT = MemberT[];
