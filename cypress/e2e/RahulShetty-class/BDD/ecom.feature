Feature: End to end ecom validation

      Application Regression


    Scenario: ecom product delivery
    Given I open ecom page
    When I add item to cart
    And Validate the total price
    Then Select the country submit and verify Thanks you