Feature: Get films

  Scenario Outline: I can obtain a list of films
    When I call the GET films route
    Then The GET films route should return a status code of <status>
    And The response body should be an Array
    And The response body should have <length> films
    And The response body should be a list of films

    Examples:
    | status | length |
    | 200    | 1      |
