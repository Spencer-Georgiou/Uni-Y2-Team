import React from "react";
// react-testing methods
import { render, screen } from "@testing-library/react";
// the component to test
import App from "../App";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom"
//simulates user interaction
import userEvent from "@testing-library/user-event"

describe('test App routers', () => {
    test('test webpage rending/navigating', async () => {
        //set up user event
        const user = userEvent.setup()
        render(<App />)
        //the element of first About Us Link
        let aboutLink = screen.getAllByText('About Us')[0]
        //simulates user click on About Us on NavBar
        await user.click(aboutLink)
        //verify page content for expected router after navigating
        expect(screen.getByText(/where passion for Mexican cuisine meets a commitment to/i)).toBeInTheDocument()
    });
});