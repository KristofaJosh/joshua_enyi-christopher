import {createContext} from "react";

const StyleContext = createContext(true);
export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;


export default StyleContext;