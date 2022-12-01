import AuthProvider from "./AuthProvider";
import MembersProvider from "./MembersProvider";
import GamesProvider from "./GamesProvider";
import CalendarProvider from "./CalendarContext";
import { PropChildrenT } from "@/types";
type PropsT = PropChildrenT;
const ContextsProvider = ({ children }: PropsT) => {
  return (
    <AuthProvider>
      <CalendarProvider>
        <GamesProvider>
          <MembersProvider>{children}</MembersProvider>
        </GamesProvider>
      </CalendarProvider>
    </AuthProvider>
  );
};

export default ContextsProvider;
export { AuthContext } from "./AuthProvider";
export { MembersContext } from "./MembersProvider";
export { GamesContext } from "./GamesProvider";
export { CalendarContext } from "./CalendarContext";
