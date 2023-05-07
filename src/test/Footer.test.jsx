import { screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "../utils/test-utils"
import Footer from "../components/Footer";


describe("Footer Component", () => {

    it("should have correct aria-label", async () => {
        render(<Footer/>);

        const footerAriaLabel = await screen.getByLabelText(/Site Footer/i);

        expect(footerAriaLabel).toBeDefined();
    });

    it("should include the correct title", async () => {
        render(<Footer/>);

        const footerAriaLabel = await screen.getByText(/Proudly Open Source 🍕/i);

        expect(footerAriaLabel).toBeDefined();
    })

});