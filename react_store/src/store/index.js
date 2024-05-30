import { createSlice, configureStore } from '@reduxjs/toolkit';


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        isLoggedIn: false,
        customer_id: "",
        customer_firstname: "",
        customer_lastname: "",
        customer_username: "",
        customer_email: "",
        basket: [
            { product_id: "",
              product_name: "",
              size: "",
              color: "",
              product_description: "",
              price: 0,
              seller: "",
              quantity: "",
              category_id: "",
            }

        ]
    },
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.customer_id = action.payload.userData.id;
            state.customer_firstname = action.payload.userData.firstname;
            state.customer_lastname = action.payload.userData.lastname;
            state.customer_username = action.payload.userData.username;
            state.customer_email = action.payload.userData.email;
        },

        logout(state, action) {
                state.isLoggedIn = false;
                state.customer_id = "";
                state.customer_firstname = "";
                state.customer_lastname = "";
                state.customer_username = "";
                state.customer_email = "";
    
            // transfer this to the frontend form
            localStorage.removeItem('token');

            // Other actions to be added in the reducer include:
            // - add to basket
            // - remove from basket
            // - buy item 
            // - store theme (choose from black theme or white theme)
            
        }
    }
})

export const actions = counterSlice.actions;
export const store = configureStore({reducer: counterSlice.reducer});