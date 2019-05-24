Feature: Sign in

  Scenario Outline: A user can sign in
    Given the account is in the database
    When I call the POST signin route
    Then The route should return a status code of <status>
    And The response body should be an Object
    And The response body should be username and token

    Examples:
    | status |
    | 200    |

  Scenario Outline: Wrong password
    Given the account is in the database
    When I call the POST signin route
    Then The route should return a status code of <status>

    Examples:
    | status |
    | 401    |

  Scenario Outline: Wrong username
    Given the database is empty
    Given the account is not in the database
    When I call the POST signin route
    Then The route should return a status code of <status>

    Examples:
    | status |
    | 401    |
