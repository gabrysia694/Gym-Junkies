import { screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "../utils/test-utils";
import App from "../App";


describe("App Navigation", () => {

    it("should render root Page", async () => {
        render(<App/>);

        const headlineOne = await screen.getByText(/Your Ultimate Destination for a Healthier You!/i);
        const headlineTwo = await screen.getByText(/Your One-Stop Destination for Total Body Transformation/i);
        const headlineThree = await screen.getByText(/Your Ultimate Destination for Fitness/i);

        expect(headlineOne).toBeDefined();
        expect(headlineTwo).toBeDefined();
        expect(headlineThree).toBeDefined();
    });

    it("should render the guide page", async () => {
        render(<App/>, { route: "/GuidePage" });

        const guideHeadline = await screen.getByText(/workout/i);

        expect(guideHeadline).toBeDefined();
    });

    it("should render the documentation page", async () => {
        render(<App/>, { route: "/DocsPage"});

        const docsHeadline = await screen.getByText(/Follow these steps to add your guides from Github/i);

        expect(docsHeadline).toBeDefined();
    });

    it("should render the contributors page", async () => {
        render(<App/>, { route: "/ContributorsPage"});

        const contributorsHeadline = await screen.getAllByText(/Contributors/i);

        expect(contributorsHeadline).toBeDefined();
    });

    it("should render the non exesting Page", async () => {
        render(<App/>, { route: "/invalidPath"});

        const notFoundCodeHeadline = await screen.getByText(/404/i);
        const pageNotFoundText = await screen.getByText(/Page not found/i);
        const notFoundDescription = await screen.getByText(/The page you are looking for does not exist./i);
        const goBackHometext = await screen.getByText(/Go back home/i);

        expect(notFoundCodeHeadline).toBeDefined();
        expect(pageNotFoundText).toBeDefined();
        expect(notFoundDescription).toBeDefined();
        expect(goBackHometext).toBeDefined();
    });
    
});