import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Border from ".";

describe("Border component", () => {
  it("render without crashing", () => {
    shallow(<Border />);
  });
});
