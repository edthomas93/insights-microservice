Feature: Post users

  Scenario Outline: I can create a user
    When I call the POST users route
    Then POST users route should return a status code of <status>
    And The response body should be an Object
    And The response body should be new user details

    Examples:
    | status |
    | 200    |
