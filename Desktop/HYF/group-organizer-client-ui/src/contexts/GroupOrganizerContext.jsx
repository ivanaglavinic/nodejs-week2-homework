import { createContext, useContext, useState } from "react";

const GroupOrganizerContext = createContext({});

export const ContextProvider = ({ children} ) => {
  const [isFontSizeLarge, setIsFontSizeLarge] = useState(false);
  // getter -> gives us some value
  // setter -> update the value

  const setFontSize = () => {

    setIsFontSizeLarge(!isFontSizeLarge);
  };
  const value = {isFontSizeLarge, setFontSize};
   return (
     <GroupOrganizerContext.Provider value={value}>
       {children}
     </GroupOrganizerContext.Provider>
 );
};

export const useGroupOrganizer = () => useContext(GroupOrganizerContext);