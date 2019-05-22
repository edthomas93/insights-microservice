Feature: Get users

  Scenario Outline: I can obtain a list of users
    When I call the GET users route
    Then GET films route should return a status code of <status>
    And The response body should be an Array
    And The response body should be a list of users

    Examples:
    | status |
    | 200    |
