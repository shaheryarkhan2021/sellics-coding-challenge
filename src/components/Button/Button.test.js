import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Button from ".";

describe("Button component", () => {
  it("render without crashing", () => {
    shallow(<Button onClick={() => {}}>Submit</Button>);
  });

  it("Should call onClick function on clicking the button", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick}>Submit</Button>);
    shallowToJson(wrapper).node.props.onClick();
    expect(onClick).toBeCalled();
  });

  it("Should should receive props when rendering button", () => {
    const wrapper = shallow(<Button buttonType={"blue"}>Submit</Button>);
    expect(shallowToJson(wrapper).node.props.buttonType).toEqual("blue");
  });
});
