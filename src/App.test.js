import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

// test("Learn React Testing", () => {
//   const wrapper = shallow(<App />);
//   console.log(wrapper.debug());
//   expect(wrapper.exists()).toBe(true);
// });

test("Render without crashing", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("Render increament button", () => {});

test("Render counter display", () => {});

test("Counter display starts at 0", () => {});

test("Clicking button increaments counter", () => {});

test("Clicking button increaments counter display", () => {});
