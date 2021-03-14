import "@testing-library/jest-dom/extend-expect"

//This file gets run automatically by Jest before every test and therefore we don’t need to add the imports to every single test file.
//Lastly we need to tell Jest where to find this file. Open your jest.config.js and add this entry to the bottom after ‘setupFiles’: