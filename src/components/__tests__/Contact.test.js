import { render ,screen} from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";


  describe("Contact Us Page Test Case", ()=>{
     
   //  afterAll(()=>{
   //       console.log("After All");
   //  })

   //   beforeEach(()=>{
   //      console.log("Before Each");
   //   })

   //   beforeAll(()=>{
   //      console.log("Before Each");
   //   })

   //   afterEach(()=>{
   //      console.log("After All");
   //   })

  test("should load contact us component" , ()=>{

     render(<Contact/>);

       const heading = screen.getByRole("heading");

          expect(heading).toBeInTheDocument();
  });

  test("should load button us component" , ()=>{

    render(<Contact/>);

      const button = screen.getByRole("button");
    //   const button1 = screen.getByTest("Submit");

         expect(button).toBeInTheDocument();
 });


 test("should load button us component" , ()=>{

    render(<Contact/>);

      const inputName = screen.getByPlaceholderText("name");
    //   const button1 = screen.getByTest("Submit");

         expect(inputName).toBeInTheDocument();
 });



 test("should load 2 input  button us component" , ()=>{

    render(<Contact/>);

      const inputName = screen.getAllByRole("textbox");
    //   const button1 = screen.getByTest("Submit");

       console.log(inputName.length)

         expect(inputName.length).toBe(2);
 });

});