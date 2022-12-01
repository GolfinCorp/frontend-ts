import AuthProvider from "./AuthProvider";
import MembersProvider from "./MembersProvider";
import GamesProvider from "./GamesProvider";
import CalendarProvider from "./CalendarContext";
const ContextsProvider = ({ children }) => {
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
