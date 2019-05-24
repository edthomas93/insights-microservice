Feature: Post users

  Scenario Outline: I can create a user
    Given the database is empty
    When I call the POST /signup route
    Then The route should return a status code of <status>
    And The response body should be an Object
    And The response body should be username and token

    Examples:
    | status |
    | 200    |

# Validate Body - Return 400 Status

# Duplicate Username - Return 409
