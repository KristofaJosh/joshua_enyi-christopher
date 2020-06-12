import {createContext} from "react";

const StyleContext = createContext({navBar: ()=>{}});
export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;