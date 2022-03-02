import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import StyledImageView from ".";

describe("StyledImageView component", () => {
  it("render without crashing", () => {
    shallow(<StyledImageView> View</StyledImageView>);
  });

  it("Should contain children props for StyledImageView", () => {
    const wrapper = shallow(<StyledImageView>This is view</StyledImageView>);
    expect(shallowToJson(wrapper).node.props.children).toEqual("This is view");
  });

  it("Should contain props for StyledImageView", () => {
    const wrapper = shallow(
      <StyledImageView height={"10px"}>This is view</StyledImageView>
    );
    expect(shallowToJson(wrapper).node.props.height).toEqual("10px");
  });
});
