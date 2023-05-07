import { screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "../utils/test-utils"
import Navbar from "../components/Navbar";


describe("Navbar Component", () => {

    it("should render the all Navigation Tabs", async () => {
        render(<Navbar/>);

        const homeIcon = await screen.getByAltText(/Gym Junkies logo/i);
        const guideText = await screen.getByText(/Guide/i);
        const docsText = await screen.getByText(/Docs/i);
        const contributorsText = await screen.getByText(/Contributors/i);
        const themeIcon = await screen.getByText(/☀️/i);

        expect(homeIcon).toBeDefined();
        expect(guideText).toBeDefined();
        expect(docsText).toBeDefined();
        expect(contributorsText).toBeDefined();
        expect(themeIcon).toBeDefined();
    });

    it("should have correct aria-label", async () => {
        render(<Navbar/>);

        const navAriaLabel = await screen.getByLabelText(/Site Nav/i);

        expect(navAriaLabel).toBeDefined();
    });

});