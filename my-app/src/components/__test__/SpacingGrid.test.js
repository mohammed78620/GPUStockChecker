// setup file
import React from "react";
import { mount, shallow } from "enzyme";
import axios from "axios";
import { act } from "react-dom/test-utils";

import SpacingGrid from '../SpacingGrid'
jest.mock("axios");

// mock data
const data = {
    title: "Gigabyte AORUS NVIDIA GeForce RTX 3060 Ti 8GB ELITEv2 LHR Ampere Graphics Card",
    img: "https://www.scan.co.uk/images/products/super/3348045-l-a.jpg",
    stock: false
};

describe("LoadImage test", () => {
  let wrapper;

  // clear all mocks
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders with loading", () => {
    wrapper = shallow(<SpacingGrid />);    
    expect(wrapper.find("div").first().text()).toBe("Loading...");
  });

});