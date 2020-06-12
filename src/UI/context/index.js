import {createContext} from "react";

const StyleContext = createContext(null);
export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;