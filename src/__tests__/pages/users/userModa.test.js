import React from "react";
import { shallow, expect } from "enzyme";
import UserModal from "../../../pages/users/UserModal";

describe("UserModal", () => {
  const wrapper = shallow(<UserModal />);
  expect(wrapper.find("div")).to.have.lengthOf(1);

  describe("render", () => {
    it("show user modal ", () => {
      wrapper.setProps({ isOpen: true });
      wrapper.update();
      expect(wrapper.find(".wds-userModal__Modal").exists()).toBeTruthy();
      expect(wrapper.find(".wds-userModal__content").exists()).toBeTruthy();
    });

    it("close user modal", () => {
      wrapper.setProps({ isOpen: false });
      wrapper.update();
      expect(wrapper.find(".wds-userModal__Modal").exists()).toBeFalsy();
      expect(wrapper.find(".wds-userModal__content").exists()).toBeFalsy();
    });
  });
});
