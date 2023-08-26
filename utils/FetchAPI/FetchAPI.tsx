// Creating a utility function to fetch data from an API and then using it in Redux is a common pattern in web development. Here's a step-by-step guide on how to do this in a Next.js project with TypeScript:

// Create a Utility Function:

// First, create a utility function that will handle the API requests. You can create a new file, e.g., api.ts, in your project's utilities folder:

// typescript
// Copy code
// utilities/api.ts

export async function fetchData(url: string) {
console.log(url)
  try {
    const response = await fetch(url);
    console.log("res",response)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}
// This function takes a URL as an argument, fetches data from that URL, and returns the JSON response. It also handles network errors and throws an error if the response is not OK.

// Create Redux Actions:

// Next, you'll want to create Redux actions to manage your application's state. Create a new file, e.g., actions.ts, in your Redux folder:

// typescript
// Copy code
// // redux/actions.ts

// import { fetchData } from '../utilities/api';

// export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
// export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

// export const fetchDataSuccess = (data: any) => ({
//   type: FETCH_DATA_SUCCESS,
//   payload: data,
// });

// export const fetchDataError = (error: string) => ({
//   type: FETCH_DATA_ERROR,
//   payload: error,
// });

// export const fetchApiData = (url: string) => {
//   return async (dispatch: any) => {
//     try {
//       const data = await fetchData(url);
//       dispatch(fetchDataSuccess(data));
//     } catch (error) {
//       dispatch(fetchDataError(error.message));
//     }
//   };
// };
// Here, we have defined action types for success and error states when fetching data. We also have an async action creator, fetchApiData, which uses the fetchData utility function and dispatches the appropriate actions based on the result.

// Create a Redux Reducer:

// Now, create a Redux reducer to manage the state changes:

// typescript
// Copy code
// // redux/reducer.ts

// import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './actions';

// const initialState = {
//   data: null,
//   error: null,
// };

// const reducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case FETCH_DATA_SUCCESS:
//       return {
//         ...state,
//         data: action.payload,
//         error: null,
//       };
//     case FETCH_DATA_ERROR:
//       return {
//         ...state,
//         data: null,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
// This reducer handles the success and error actions and updates the Redux store accordingly.

// Configure Redux Store:

// Configure your Redux store in your Next.js application. Make sure to include the reducer and any middleware you need, such as Thunk, for async actions.

// Dispatch the Action in a Component:

// In your React components, you can now import and use the fetchApiData action creator to fetch data and update the Redux store:

// typescript
// Copy code
// // components/YourComponent.tsx

// import { useDispatch } from 'react-redux';
// import { fetchApiData } from '../redux/actions';

// const YourComponent = () => {
//   const dispatch = useDispatch();

//   const fetchDataFromApi = () => {
//     const apiUrl = 'https://api.example.com/data'; // Replace with your API URL
//     dispatch(fetchApiData(apiUrl));
//   };

//   return (
//     <div>
//       <button onClick={fetchDataFromApi}>Fetch Data</button>
//     </div>
//   );
// };

// export default YourComponent;
// When the "Fetch Data" button is clicked, it will trigger the API request and update the Redux store with the fetched data or an error.

// Access Data in Your Components:

// Finally, you can access the fetched data from the Redux store in your components by connecting them to the Redux store using useSelector.

// That's a basic overview of how to create a utility function for fetching API data and use it with Redux in a Next.js project with TypeScript. Remember to configure Redux properly and set up your component hierarchy according to your application's needs.