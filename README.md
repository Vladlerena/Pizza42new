# Auth0 JavaScript Login (Vladimiro Lerena's version)

Based on the public repository by Auth0, I prepared forked version in order to include to a standard php/html page the authentication with Auth0 with Google and suer and password:

# Solutions Engineer
Tech Challenge Instructions

# Overview
Welcome to the tech challenge for the Auth0 Solutions Engineer role!
To show us what you can do, you’re going to get a chance to build a real solution that leverages the Auth0 identity platform. Your solution must solve the business ​Use Case​​ given below, delivering the specific features in the ​Solution​​ section. Oh, and be sure to check out the ​FAQ section at the end for answers to important questions.

# Solution
As a Solutions Engineer you are tasked with building a PoC (Proof of Concept) that shows how Pizza 42 could solve the above use case, leveraging the Auth0 identity platform. Your solution will need to demonstrate the following:

1. Show how a new customer can sign up and an existing customer can sign in with email/password or Google
    . I've included the as a SPA called my first app from Vlad in my free account tenant in Auth0
    
2. Ensure that if a customer signs in with either an email/password or Google, it will be treated as the same user if they use the same email address
    . 
3. Show that the solution can be built as a “modern” web application (SPA) which can then securely call the API backend of Pizza 42 using OAuth.
4. Require that a customer has a verified email address before they can place a pizza order, ​but they should still be able to sign into the app​.
5. Use Auth0 features to gather additional information about a user (specifically their gender) without prompting them directly.
6. Use Auth0 to call the Google People API to fetch the total number of Google connections a user has and store that count in their user profile.


