Feature: Sign in

  Scenario Outline: A user can sign in
    Given the database the account is in the database
    When I call the POST users/signin route
    Then The route should return a status code of <status>
    And The response body should be an Object
    And The response body should be user details and session key

    Examples:
    | status |
    | 200    |