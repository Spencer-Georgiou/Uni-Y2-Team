import React from "react";
// react-testing methods
import { render, screen } from "@testing-library/react";
// the component to test
import FilterMenu from "../components/menu/FoodFilterMenu"
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom"
//simulates user interaction
import userEvent from "@testing-library/user-event"


describe('test food menu', () => {
    test('test rendering', async () => {
        render(<FilterMenu />)
        expect(screen.getByText("Dietary Filter")).toBeInTheDocument()
        expect(screen.getByText(/Crispy tacos filled with cheese/i)).toBeInTheDocument()
        expect(screen.getByText(/Burrito/i)).toBeInTheDocument()
    });
    test('test clicking menu filter button', async () => {
        //set up user event
        const user = userEvent.setup()
        render(<FilterMenu />)
        const allergyButton = screen.getByRole('checkbox', { name: /Dairy/i })
        //simulates user click on nuts allergy button
        await user.click(allergyButton)
        //this button should be checked 
        expect(allergyButton).toBeChecked()
    });

})
