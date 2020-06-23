import React from 'react';
import {toolResolver} from "../helpers/tools";

describe('Sanitize Tools', () => {
    
    it("will remove [',', '.' ] and return a list", () => {

        expect(toolResolver("a, bag, c, d.")).toEqual(["a", "bag", "c", "d"]);
        expect(toolResolver("b.a,g")).toEqual(["b", "a", "g"]);
        expect(toolResolver("*f h jl, k. ")).toEqual(["f", "h", "jl", "k"])
        expect(toolResolver(["*f", "h", "jl", "k."])).toEqual(["*f", "h", "jl", "k."])
    });
    
});