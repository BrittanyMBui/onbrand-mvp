import gql from 'graphql-tag';

export const FETCH_PRODUCTS_QUERY = gql `
    query GetProducts {
        getProducts{
            id
            productName
            brand
            category
            brandType
            url
            img
            price
        }
    }
`