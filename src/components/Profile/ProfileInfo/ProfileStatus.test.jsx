import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    //test #1
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus  status="it-codeis.com" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("it-codeis.com");
  });

  //test #2
  test("after creation <span> should be displayed with status", () => {
    const component = create(<ProfileStatus  status="it-codeis.com" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  //test #3
  test("after creation <span> should be displayed with correct status", () => {
    const component = create(<ProfileStatus  status="it-codeis.com" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("it-codeis.com");
  });
  
  //test #4
  test("<input> shouldn't be displayed", () => {
    const component = create(<ProfileStatus  status="it-codeis.com" />);
    const root = component.root;
    expect(() => {
        let input = root.findByType("input");
    }).toThrow();
    })

    //test #5
  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus  status="it-codeis.com" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("it-codeis.com");
  });

});