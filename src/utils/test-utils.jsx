import { render } from "@testing-library/react";
import { ThemeProvider } from "../context/theme";
import { BrowserRouter } from "react-router-dom";

/*
    A wrapper that renders the components with the necessary theme provider and React router. 
*/
const renderWrapper = ({ children }) =>{
    return (
        <ThemeProvider>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </ThemeProvider>
    );
};

/*
    A custom render function that uses the wrapper and can be used for the unit tests.
*/ 
const customRender = (ui, {route = '/'} = {}, options) => {
    window.history.pushState({}, '', route);

    return render(ui, {wrapper: renderWrapper, ...options});
  };

export { customRender as render };