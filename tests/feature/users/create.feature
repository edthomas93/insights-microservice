Feature: Post users

  Scenario Outline: I can create a user
    Given the database is empty
    When I call the POST /signup route
    Then The route should return a status code of <status>
    And The response body should be an Object
    And The response body should be user details and session key

    Examples:
    | status |
    | 200    |

  Scenario Outline: My request is validated
    Given I have an invalid users signup payload
    When I call the route
    Then The status code is 400
