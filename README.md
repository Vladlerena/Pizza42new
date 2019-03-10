# Auth0 JavaScript Login (Vladimiro Lerena's version)

Based on the public repository by Auth0, I prepared forked version in order to include to a standard php/html page the authentication with Auth0 with Google and suer and password:

# Solutions Engineer
Tech Challenge Instructions

# Overview
Welcome to the tech challenge for the Auth0 Solutions Engineer role!
To show us what you can do, you’re going to get a chance to build a real solution that leverages the Auth0 identity platform. Your solution must solve the business ​Use Case​​ given below, delivering the specific features in the ​Solution​​ section. Oh, and be sure to check out the ​FAQ section at the end for answers to important questions.

# Solution
As a Solutions Engineer you are tasked with building a PoC (Proof of Concept) that shows how Pizza 42 could solve the above use case, leveraging the Auth0 identity platform. Your solution will need to demonstrate the following:

> 1) Working application in Heroku --> https://vladlerena.herokuapp.com
> 2) Go the site and click in log in, then choose to login or sing up with Google or with user and password.
> 3) here !! :) https://github.com/Vladlerena/Pizza42new

1. Show how a new customer can sign up and an existing customer can sign in with email/password or Google
> I've included the as a SPA called my first app from Vlad in my free account tenant in Auth0
    
2. Ensure that if a customer signs in with either an email/password or Google, it will be treated as the same user if they use the same email address
> inside of the connections options of the App in Auth0 tenant I activated _Username-Password-Authentication and google-oauth2_.

3. Show that the solution can be built as a “modern” web application (SPA) which can then securely call the API backend of Pizza 42 using OAuth.
> Inside of the quick start of the Applications option of my tenant in Auth0, I've chosen the SPA for JavaScript then I've based my app in the GitHub repository offered in the site (Get a sample configured with your account settings or check it on Github).

4. Require that a customer has a verified email address before they can place a pizza order, ​but they should still be able to sign into the app​.
> This option seems to be possible with a paid account, https://auth0.com/docs/link-accounts

5. Use Auth0 features to gather additional information about a user (specifically their gender) without prompting them directly.
> Inside of the options for connections, regarding the application used in this exercise, I activated in the OAuth2 profile the Google+ permission for the app, the gender data is public available for google users that has an active Google+ profile, if the users do not have a Google+ active account this information would not be populated in the JWT. I've check this wiith the _try_ option inside of the social connections tab of the Auth0 portal.

6. Use Auth0 to call the Google People API to fetch the total number of Google connections a user has and store that count in their user profile.
> My understanding is that the is reflected in the logs for of the users that decided to log in with google credential into the app.

