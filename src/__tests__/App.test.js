import "@testing-library/jest-dom";
import { render , screen } from "@testing-library/react";
import App from "../components/App";

// test("renders the correct child components", () => {
//   const { container } = render(<App />);
//   expect(container.querySelector(".App")).toBeInTheDocument();
//   expect(container.querySelector(".App header")).toBeInTheDocument();
//   expect(container.querySelector(".App aside"))
//   expect(container.querySelector(".App main")).toBeInTheDocument();
// });

test('The app loads succesfully and displays information', ()=>{
  render( <App /> )
  const AppElement = screen.getAllByText(/You're on your own from here! Follow the deliverables; test things out in the browser as you write your code; and good luck!/i);
  expect(AppElement).toBeInTheDocument
});