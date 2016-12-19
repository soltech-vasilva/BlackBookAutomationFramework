###################################
##   LOG IN Test cases            #
###################################
#
Feature: Enter data on "LOGIN" page

  Rules:
  -Verify that All inputs boxes are working. (Test case A)

  Question:
  -What happens if email entered is bad (display ERROR)? Yes (Test case B-1)
  -What happens if phone number entered is bad (display ERROR)? Yes (Test case B-2)
  -What happens if fields are empty on require fields (display ERROR)? Yes (Test case C)
  -BUGS WHITE SPACES for first name ,last name , email, and password?

#  Background:
#    Given I enter BlackBook Website

#######################################################################################################################
#                                             Test cases A                                                            #
#######################################################################################################################
@TestCases_1
  Scenario Outline: Enter good data on Login Page
    Given I enter BlackBook Login Website
    And I enter my user email address <currentEmailAddress>
    And I enter my Password <currentPassword>
    And I click Login Button
    Then I should not see in "currentEmailAddress" errors displayed
 # Then I should see "currentEmailAddress" errors "Email Is Required" displayed for this "empty" field
    And I wait
    And I click Profile Button
    And I click My Profile sub menu
    And I click Edit Button
    And I click Reset Button
    And I click Cancel Button
    And I click Profile Button
    And I click Logout sub menu

    Examples:
           | currentEmailAddress     |   currentPassword  |
#phone number inputs
            #valid phone number with parenthesis and dashes
          | user3@example.com    |   Password1     |
   #        |                  |             |
